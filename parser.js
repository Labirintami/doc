const globby = require('globby');
const path = require('path');
const fs = require('fs-extra');
const FileDataParser = require('./local_modules/cusom-md-data-parser');

const DEFAULT_OPTIONS = {
  rootPath: __dirname,
  source: 'docs_draft',
  dist: 'docs',
  include: ['**/*.{md,mdx}'],
  componentImports: {
    atNotation: {
      short: 'Short',
      type: 'Type',
      descr: 'Descr'
    },
    bracketNotation: {
      note: 'Note',
      pronote: 'ProNote'
    }
  }
};

const changeFileExt = (pathName, newExt) => {
  const { dir, name } = path.parse(pathName);
  return `${dir}/${name}.${newExt}`;
}

const parseDocs = async (options = {}) => {
  const mergedOptions = {...DEFAULT_OPTIONS, options};
  const {
    source,
    dist,
    include,
    rootPath,
    componentImports: {
      atNotation,
      bracketNotation
    }
  } = mergedOptions;

  const fullPathSourceDir = path.join(rootPath, source);
  const fullPathDistDir = path.join(rootPath, dist);

  const wrapDataWithComponent = (data, key) => {
    const componentName = atNotation[key];
    return componentName ? `\n<${componentName}>\n${data}\n\n</${componentName}>\n\n` : data;
  }
  
  const atNotationCallback = (data, { key }) => {
    switch(key) {
      case 'default':
        return `<strong>Default value: </strong> ${data}`;
      case 'example':
        return `~~~js\n${data}\n~~~`;
      default:
        return key ? wrapDataWithComponent(data, key) : data;
    }
  };
  
  const bracketNotationCallback = (data, { key, fullMatch }) => {
    switch(key) {
      case 'note':
        return `:::note\n${data}1\n:::`;
      case 'pronote':
        return `:::danger Pro Note\n${data}\n:::`;
      case 'editor':
        return data;
      default:
        return fullMatch;
    }
  };

  const sources = await globby(include, { cwd: fullPathSourceDir });

  await Promise.all(sources.map(async (sourcePath) => {
    const filePathSource = path.join(fullPathSourceDir, sourcePath);
    const filePathDist= path.join(fullPathDistDir, sourcePath);

    const newFilePathDist = changeFileExt(filePathDist, 'mdx');

    const fileData = await fs.readFile(filePathSource, 'utf-8');
    const fileDataParser = new FileDataParser({ fileData });

    const uniqueATNotationMatchesKeys = [];
    const uniqueBraceNotationMatchesKeys = [];

    fileDataParser
      .on('braceNotationMatch', (data, { key }) => {
        if (!uniqueBraceNotationMatchesKeys.some(keyItem => keyItem === key)) {
          uniqueBraceNotationMatchesKeys.push(key);
        }
      })
      .on('atNotationMatch', (data, { key }) => {
        if (!uniqueATNotationMatchesKeys.some(keyItem => keyItem === key)) {
          uniqueATNotationMatchesKeys.push(key);
        }
      })

    let resultString = fileDataParser
      .findAndReplaceATNotation(atNotationCallback)
      .findAndReplaceBracketNotation(bracketNotationCallback)
      .normalizeMarkdownMdLinks()
      .fileData;
    

    const availableATNotationComponents = uniqueATNotationMatchesKeys.reduce((result, key) => atNotation[key] ? [...result, atNotation[key]] : result, []);
    const availableBracketNotationComponents = uniqueBraceNotationMatchesKeys.reduce((result, key) => bracketNotation[key] ? [...result, bracketNotation[key]] : result, []);

    const allAvailableComponents = [...availableATNotationComponents, ...availableBracketNotationComponents];

    if (allAvailableComponents.length !== 0) {
      const imports = `import { ${allAvailableComponents.join(', ')} } from '@site/src/components';\n\n`
      const isTitles = /---(\n|.)+?---/m.test(resultString);
      resultString = isTitles ? resultString.replace(/(---(\n|.)+?---)/m, `$1\n\n${imports}`) : imports + resultString;
    };
    
    if (fs.existsSync(filePathDist)) {
      fs.removeSync(filePathDist);
    }

    await fs.outputFile(newFilePathDist, resultString);
    return { source: newFilePathDist, content: resultString };
  }));
}

parseDocs(DEFAULT_OPTIONS);