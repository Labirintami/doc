const path = require('path');

module.exports = (context, options) => {
  const { siteDir } = context;
  const {
    onBraceNotationMatch,
    onAtNotationMatch,
    onEmptyLinkMatch,
    onAfterDataTransformation
  } = options;

  return {
    name: 'dhx-md-data-transformer-plugin',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              include: [path.resolve(siteDir, 'docs')],
              test: /(\.mdx?)$/,
              use: [
                {
                  loader: 'dhx-md-data-transformer-loader',
                  options: {
                    onBraceNotationMatch,
                    onAtNotationMatch,
                    onEmptyLinkMatch,
                    onAfterDataTransformation,
                  }
                }
              ]
            }
          ],
        },
        resolveLoader: {
          modules: ['node_modules', path.resolve(siteDir, 'loaders')]
        }
      };
    }
  };
};
