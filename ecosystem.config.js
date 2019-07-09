module.exports = {
    apps: [{
      name: 'Search_Bar',
      script: './server.server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        //host: 'ec2-3-17-68-248.us-east-2.compute.amazonaws.com',
        host: ["192.168.0.13"],
        key: '~/.ssh/Search_Bar.pem',
        ref: 'origin/master',
        repo: 'https://github.com/seabay-hratx42-fec/Search_Bar.git',
        //repo: 'git@github.com:seabay-hratx42-fec/Search_Bar.git',
        path: '/home/ubuntu/Search_Bar',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }

 