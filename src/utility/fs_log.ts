import fs from 'fs';
import path from 'path';

const writeLog = (content: any, file_name = 'log.txt') => {
  try {
    console.log(__dirname);
    const data = fs.writeFileSync(
      path.join(__dirname, '..', 'logs', file_name),
      '\n\n' + new Date().toLocaleString() + '\n' + JSON.stringify(content, undefined, 4),
      {
        encoding: 'utf8',
        flag: 'a',
      }
    );
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

export default writeLog;
