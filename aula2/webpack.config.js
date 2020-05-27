const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = { 
    mode: "development",
    devServer: {
      open: true,
      contentBase: "dist"
    },
    entry: "./src/componentes/listagem/listagem-cliente.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/clientes.html",
            filename: "index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use:["html-loader"]
            },
            {
                test: /\.png$/,
                use: {
                    loader:"file-loader",
                    options: {
                        name: "[name].[ext]" 
                    }
                }
          }
        ]
    }
}