const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use : {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          }
        }
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'appShell',
      remotes: {
        app1: 'remoteApp1@http://localhost:8082/remoteEntry.js',
        app2: 'remoteApp2@http://localhost:8081/remoteEntry.js'
      }
    })
  ]
}
