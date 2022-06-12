import { createReadStream } from 'fs';
import { resolve, parse } from 'path';
import { access } from 'fs/promises';

export const cat = async (currentPath, comArray) => {
  if (comArray.length !== 2) return 'error';

  try {
    const fileToRead = resolve(currentPath, comArray[1]);
    await access(fileToRead);
    const fileStream = createReadStream(fileToRead, 'utf-8');

    let content = '';
    return new Promise((resolve) => {
      fileStream.on('readable', () => {
        const chunk = fileStream.read();
        if (chunk) {
          content += chunk;
        } else {
          console.log(`\n${parse(fileToRead).name}\n`);
          console.log(content);
          resolve();
        }
      });
      fileStream.on('error', () => {
        console.error('FS operation failed');
        resolve();
      });
    });
  } catch {
    console.error('FS operation failed');
  }
};
