module.exports = {
  entry: __dirname + '/client/src/index.jsx',

  module: {
    rules: [
      { 
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },

  // loaders: [
  //   {
  //     test: /\.(png|jpg)$/,
  //     loader: 'url?limit=25000'
  //   }
  // ],
  
  output: {
    path: __dirname + '/client/dist',
    filename: 'bundle.js',
    publicPath: '/'
  }
}
