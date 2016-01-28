var webpack = require('webpack');

module.exports = {
  entry: './src/assets/js/app.js',
  output: {
    path: './public/assets/js',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': 'jquery'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        //include: [
          //path.resolve(__dirname, 'lib')
        //]
      }
    ]
  }
};