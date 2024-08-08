const path = require('path');

module.exports = {
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
                        loader: 'babe-loader', //loader para llevar JS moderno a JS antiguo para que sea compatible con todos los navegadores
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                },
            ],
        },
        devtools: 'source-map', //Generar source maps para facilitar la depuracion
        devServer:{
            contentBase: path.resolve(__dirname, 'dist'), //carpeta desde el cual el servidor agarrara los archivos
            compress: true, //Habilitar la compresion gzip
            port: 9000, //Puerto del servidor de desarrollo
        },
    };
