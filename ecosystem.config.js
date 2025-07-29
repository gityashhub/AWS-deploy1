module.exports = {
  apps: [{
    name: "aws-ec2-deploy-visual-site",
    script: "server.js",
    instances: 1,
    autorestart: true
  }]
};