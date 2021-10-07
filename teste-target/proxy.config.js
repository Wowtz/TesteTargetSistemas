const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://localhost:44398',
    secure: true,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;