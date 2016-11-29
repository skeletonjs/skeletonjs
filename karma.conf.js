module.exports = function(config) {
    config.set({
        frameworks: [
            'mocha'
        ],
        plugins: [
            'karma-phantomjs-launcher',
            'karma-mocha',
            'karma-webpack'
        ],
        files: [
            'tests/index.js'
        ],
        preprocessors: {
          'tests/index.js': ['webpack']
        },
        reporter: ['dots'],
        webpack: {
            resolve: {
                root: __dirname,
                alias: {
                    'react': 'lib/index.js',
                    'react-dom': 'lib/index.js'
                }
            },
            module: {
                loaders: [
                    {
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react']
                        },
                        test: /\.js?$/
                    }
                ]
            }
        },
        autoWatch: true,
        browsers: ['PhantomJS']
    })
}
