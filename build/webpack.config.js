
const utils = require('./utils')
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
      app: "./src/main.js",
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, '../dist'),
        filename: utils.assetsPath('js/[name].[chunkhash:7].js')
    },
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        modules: [
              utils.resolve('src'),
              utils.resolve('node_modules')
            ],
        alias: {
          'vue$': 'vue/dist/vue.common.js',
          '@': utils.resolve('src'),
        }
    },
   
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
                include: utils.resolve('src'),
                exclude: /node_modules/
            },
            // {
            //   test:/\.vue$/,
            //   use:'iview-loader',
            // },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
                include: [
                    utils.resolve('src'),
                    utils.resolve('/node_modules/iview/dist'),
                ]
            },  
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[hash:7].[ext]',
                    outputPath: utils.assetsPath('img')
                  }
                },
                include: utils.resolve('src'),
                exclude: /node_modules/
            },
            {
                test: /\.(woff2?|eot|svg|ttf|otf)(\?.*)?$/,
                use: {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[hash:7].[ext]',
                    outputPath: utils.assetsPath('fonts')
                  }
                },
                include: [
                        utils.resolve('src'),
                        utils.resolve('/node_modules/iview/dist'),
                ]
            },
        ]
    },
     plugins: [
        new CleanWebpackPlugin(['dist'], {
           root: utils.resolve('/')
        }),
        new webpack.DefinePlugin({
            http_env : JSON.stringify(process.env.http_env),
        }),
        new VueLoaderPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
          chunkFilename: utils.assetsPath("css/[name].[chunkhash:7].css")
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "index.html",
            inject: true,
            chunks:['runtime','app',"vendor","common"]
        }),
    ],
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    priority: 10,
                    enforce: true
                },
                commons: {
                    test: /[\\/]common[\\/]||[\\/]components[\\/]/,
                    name: 'common',
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    devServer: {
        host: '0.0.0.0' ||'localhost',
        contentBase: path.join(__dirname, 'dist'),
        disableHostCheck:true,
        port: '8090',
        open: true,
        proxy:{
          "/bms": {
            target: '192.168.52.9:8080',
          }
        }
    }
}
