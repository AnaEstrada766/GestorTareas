const path = require('path');

module.exports = {
        mode: 'development',
        entry: '/src/index.js', //punto de entrada de la
        output: {
            filename: 'bundle.js', //Nombre del archivo de salida
            path: path.resolve(__dirname, 'dist'), //Carpeta de salida
        },
        module: {
            rules:[
                {
                    test: /\.css$/, //Regex para identificar arrchivos css
                    use: ['style-loader', 'css-loader'], //Loadders para procesar archivos css
                },
                {
                    test: /\.js$/, //Regex """" js
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader', //loader para llevar JS moderno a JS antiguo para que sea compatible con todos los navegadores
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                },
            ],
        },
        devtool: 'source-map', //Generar source maps para facilitar la depuracion
        devServer:{
            static: {
                directory: path.resolve(__dirname, 'dist'),      
            },
            compress: true,
            port: 9000, //Puerto del servidor de desarrollo
        },
    };
