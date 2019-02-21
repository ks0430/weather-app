module.exports = {
    apps: [
      {
        name: 'weather-app',
        script: './src/index.js',
        env_production: {
          NODE_ENV: 'production'
        }
      }
    ]
  };