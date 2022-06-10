import { createReadStream } from 'fs';
import { resolve } from 'path';
import { access } from 'fs/promises';

export const cat = async (currentPath, cb) => {
  let fullInputArray = cb();
  if (fullInputArray.length !== 2) return 'error';

  try {
    const fileToRead = resolve(currentPath, fullInputArray[1]);
    await access(fileToRead);
    const fileStream = createReadStream(fileToRead, 'utf-8');

    let content = '';
    fileStream.on('readable', () => {
      const chunk = fileStream.read();
      chunk ? (content += chunk) : console.log(content);
    });
    fileStream.on('error', () => {
      throw Error;
    });
  } catch {
    console.error('FS operation failed');
  }
};
