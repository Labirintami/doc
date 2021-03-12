const FileDataParser = require('dhx-md-data-parser');

module.exports = function (fileData) {
  const fileDataParser = new FileDataParser({ fileData });

  const {
    onBraceNotationMatch,
    onAtNotationMatch,
    onEmptyLinkMatch,
    onAfterDataTransformation,
  } = this.loaders[this.loaderIndex]?.options || {};

  fileDataParser
    .on('braceNotationMatch', (originalData, props) => (typeof onBraceNotationMatch === 'function') ? onBraceNotationMatch(originalData, { ...props, path: this.context }) : originalData)
    .on('atNotationMatch', (originalData, props) => (typeof onAtNotationMatch === 'function') ? onAtNotationMatch(originalData, { ...props, path: this.context }) : originalData)
    .on('emptyLinkMatch', (originalData, props) => (typeof onEmptyLinkMatch === 'function') ? onEmptyLinkMatch(originalData, { ...props, path: this.context }) : originalData);

  fileDataParser
    .findAndReplaceATNotation()
    .findAndReplaceBracketNotation()
    .normalizeMarkdownMdLinks()
    .findAndReplaceEmptyLink();

  if (typeof onAfterDataTransformation === 'function') {
    const transformedData = onAfterDataTransformation(fileDataParser.fileData, { resourcePath: this.resourcePath });
    if (typeof transformedData === 'string') {
      fileDataParser.fileData = transformedData;
    }
  }

  return fileDataParser.fileData;
}
