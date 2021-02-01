class FileDataParser {
  #events = {
    bracenotationmatch: null,
    atnotationmatch: null,
  };

  #fileData = '';

  constructor({ fileData }) {
    this.#fileData = fileData;
    this.#init();
  }

  get fileData() { return this.#fileData; }

  set fileData(data) { this.#fileData = data; }

  #init = () => {
    this.#findAndReplaceStrong();
  }

  #findAndReplaceStrong = () => {
    this.fileData = this.fileData.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }

  #splitFileDataIntoChunksByATNotation = (data) => {
    const fileDataArray = data.split('\n');
    let matchIndex = 0;
    let matchKey = null;

    return fileDataArray.reduce((result, string, index) => {
      const atNotationMatch = string.match(/^@\w+:/);
      const atNotationKey = atNotationMatch ? atNotationMatch[0] : null;
      const tmpChunks = [];

      if (atNotationKey) {
        const slice = fileDataArray.slice(matchIndex, index);
        const chunk = [matchKey, slice];
        matchIndex = index;
        matchKey = atNotationKey.replace(/^@(\w+):$/, '$1');
        tmpChunks.push(chunk);
      }

      if (fileDataArray.length - 1 === index) {
        const slice = fileDataArray.slice(matchIndex, fileDataArray.length);
        tmpChunks.push([matchKey, slice]);
      }

      return [...result, ...tmpChunks];
    }, []);
  };

  on = (eventName, callback) => {
    const normalizedEventName = eventName.toLowerCase();
    this.#events = { ...this.#events, [normalizedEventName]: callback };
    return this;
  }

  findAndReplaceBracketNotation = (callback) => {
    this.fileData = this.fileData.replace(/\{\{(\w+)[\n\s]+((?:.|\n)+?)\}\}/g, (fullMatch, key, data) => {
      if (typeof this.#events.bracenotationmatch === 'function') {
        this.#events.bracenotationmatch(data, { key, fullMatch });
      }
      return (typeof callback === 'function') ? callback(data, { key, fullMatch }) : fullMatch;
    });

    return this;
  }

  findAndReplaceATNotation = (callback) => {
    const chunks = this.#splitFileDataIntoChunksByATNotation(this.fileData);

    if (chunks.length > 0) {
      this.fileData = chunks.reduce((result, [key, dataSlice], index) => {
        if (dataSlice.length === 0) return result;
        const stringWithoutATNotationKey = dataSlice[0].replace(/^@\w+:(.*)/, '$1');
        dataSlice.splice(0, 1, stringWithoutATNotationKey);

        let sliceData = dataSlice.join('\n');
        if (typeof callback === 'function') {
          sliceData = callback(sliceData, { slice: dataSlice, key });
        }
        if (typeof this.#events.atnotationmatch === 'function' && key) {
          this.#events.atnotationmatch(sliceData, { slice: dataSlice, key });
        }
        const newReusltString = result + ((chunks.length - 1 === index) ? sliceData : `${sliceData}\n`);
        return newReusltString;
      }, '');
    }

    return this;
  };

  normalizeMarkdownMdLinks = () => {
    this.fileData = this.fileData.replace(/(\[.+?\])\(([^\s]+?)(\.md)([^\s]*?)\)/gm, '$1(/$2$4)');

    return this;
  }
}

module.exports = FileDataParser;
