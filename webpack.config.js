module.exports = {
    entry: './examples/test.js',
    output: {
        path: __dirname + '/examples',
        filename: 'test.built.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            'react': 'lib/index.js',
            'react-dom': 'lib/index.js'
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
