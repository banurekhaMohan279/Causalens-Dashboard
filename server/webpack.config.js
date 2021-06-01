const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'production',
  target: 'node',
  node :{ fs: 'empty',net: 'empty' },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.bundle.js'
  }
};
