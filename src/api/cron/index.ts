import { func1 } from './orderArchive';

function start() {
  // use node corn to run this every hour
  func1();
  console.log('Starting cron jobs...');
}

export { start };
