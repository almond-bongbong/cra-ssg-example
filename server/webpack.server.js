const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('buildServer'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // include: [path.resolve(__dirname)],
        // exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          /* --------------- THIS IS WHAT I ADDED --------------- */
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
          /* ---------------------------------------------------- */
        },
      },
    ],
  },
};
