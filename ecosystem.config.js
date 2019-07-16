module.exports = {
    apps: [{
      name: 'searchbar',
      script: './server/server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-18-222-30-125.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/FEC.pem',
        ref: 'origin/master',
        repo: 'https://github.com/seabay-hratx42-fec/Search_Bar.git',
        path: '/home/ubuntu/searchbar',
        'post-deploy': 'npm install && npx webpack --config ./webpack.config.js && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }

 