const path = require('path');

const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    localIdentName: '[path][name]__[local]--[hash:base64:5]',
  },
};

module.exports = {
  mode: 'development',
  entry: './react/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-0'],
        },
      }, {
        test: /\.css$/,
        use: ['style-loader', cssLoader],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
};
