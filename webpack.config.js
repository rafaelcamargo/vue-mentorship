const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [`${__dirname}/src/scripts/app.js`],
  output: {
    filename: 'dist/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        include: [`${__dirname}/src/scripts`],
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@vue$': 'vue/dist/vue.esm.js',
      '@scripts': 'src/scripts'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    historyApiFallback: true
  }
}
