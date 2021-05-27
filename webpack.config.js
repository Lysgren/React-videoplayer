module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            }
          }
        ]
      }
    ]
  }
}