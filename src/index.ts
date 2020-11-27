import { start } from './api/cron';

export { default as GET } from './api/get';
export { default as POST } from './api/post';

// Start cron jobs
start();
