
const { VueLoaderPlugin } = require('vue-loader');

let config = {
    context: __dirname,
    entry: {
        main: './src/app.js'
    },
    output: {
        path: __dirname + '/js',
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: 'vue-loader'
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]
};

module.exports = (env, argv) => {
    let vue = 'vue/dist/vue.js';

    if(argv.mode === 'production'){
        vue = 'vue/dist/vue.min.js';
    }

    config.resolve = {
        alias: {
            vue
        }
    }
    
    return config;
}