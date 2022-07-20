const util = require("util");
const path = require("path");
const loaderUtils = require("loader-utils");

module.exports = {
    webpack: (config, options) => {
        console.log(util.inspect(config, { showHidden: true, depth: null }));
        config.module.rules.push({
            test: /\.svg$/i,
            exclude: /(node_modules)/,
            type: 'asset/resource',
            generator: {
                filename: 'static/media/[hash][ext]'
            },
        });
        config.module.rules[2].oneOf.forEach((moduleLoader, i) => {
            Array.isArray(moduleLoader.use) && moduleLoader.test.toString() === "/\\.module\\.(scss|sass)$/" &&
            moduleLoader.use.forEach((l) => {
                if (
                    l.loader.includes('/css-loader') &&
                    !l.loader.includes('postcss-loader')
                ) {
                    const {getLocalIdent, ...others} = l.options.modules;

                    l.options = {
                        ...l.options,
                        modules: {
                            ...others,
                            localIdentName: '[sha1:hash:hex:4]',
                            getLocalIdent: (loaderContext, localIdentName, localName, options) => {
                                if (!options.context) {
                                    // eslint-disable-next-line no-param-reassign
                                    options.context = loaderContext.rootContext;
                                }

                                const request = path
                                    .relative(options.context, loaderContext.resourcePath)
                                    .replace(/\\/g, '/');

                                // eslint-disable-next-line no-param-reassign
                                options.content = `${options.hashPrefix + request}+${localName}`;

                                // eslint-disable-next-line no-param-reassign
                                localIdentName = localIdentName.replace(/\[local\]/gi, localName);

                                const hash = loaderUtils.interpolateName(
                                    loaderContext,
                                    localIdentName,
                                    options
                                );

                                return hash
                                    .replace(new RegExp('[^a-zA-Z0-9\\-_\u00A0-\uFFFF]', 'g'), '-')
                                    .replace(/^((-?[0-9])|--)/, '_$1');
                            },
                        },
                    };
                }
            });
        });

        return config;
    }
};
