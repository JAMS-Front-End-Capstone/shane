const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'frontend', 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'frontend', 'dist'),
    filename: 'q-and-a-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: ['/node_modules/'],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
