const FileDataParser = require('dhx-md-data-parser');

module.exports = function (fileData) {
  const fileDataParser = new FileDataParser({ fileData });
  
  const {
    onBraceNotationMatch,
    onAtNotationMatch,
    onAfterDataTransformation,
  } = this.loaders[this.loaderIndex]?.options || {};

  fileDataParser
    .on('braceNotationMatch', (originalData, props) => (typeof onBraceNotationMatch === 'function') ? onBraceNotationMatch(originalData, props) : originalData)
    .on('atNotationMatch', (originalData, props) => (typeof onAtNotationMatch === 'function') ? onAtNotationMatch(originalData, props) : originalData);

  fileDataParser
    .findAndReplaceATNotation()
    .findAndReplaceBracketNotation()
    .normalizeMarkdownMdLinks();
  
  if (typeof onAfterDataTransformation === 'function') {
    const transformedData = onAfterDataTransformation(fileDataParser.fileData, { resourcePath: this.resourcePath });
    if (typeof transformedData === 'string') {
      fileDataParser.fileData = transformedData;
    }
  }

  return fileDataParser.fileData;
}