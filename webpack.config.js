module.exports = {
  entry: './app.js',
 
  output: {
    filename: 'bundle.js',
  },
 
  module: {
    loaders: [
      { exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
