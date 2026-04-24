const { appName } = require('./config');

function logger(message) {
  console.log(`[${appName}] ${message}`);
}

module.exports = logger;