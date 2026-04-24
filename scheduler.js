const logger = require('./logger');

logger('Scheduler started');

function scheduleTask(name, interval, task) {
  logger(`Task "${name}" scheduled every ${interval} ms`);

  setInterval(() => {
    logger(`Task "${name}" is running`);
    task();
  }, interval);
}

scheduleTask('running-task', 10000, () => {
  console.log('running');
});