const path = require('path');

module.exports = (context, options) => {
  const { siteDir } = context;
  const {
    onBraceNotationMatch,
    onAtNotationMatch,
    onAfterDataTransformation
  } = options;

  return {
    name: 'cusom-md-data-transformer-plugin',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              include: [path.resolve(siteDir, 'docs')],
              test: /(\.mdx?)$/,
              use: [
                {
                  loader: 'cusom-md-data-transformer-loader',
                  options: {
                    onBraceNotationMatch,
                    onAtNotationMatch,
                    onAfterDataTransformation
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