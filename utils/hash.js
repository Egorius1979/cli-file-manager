import { createHash } from 'crypto';
import { resolve } from 'path';
import { createReadStream } from 'fs';
import { access } from 'fs/promises';

export const hash = async (currDir, comArray) => {
  if (comArray.length !== 2) return 'error';

  try {
    const filePath = resolve(currDir, comArray[1]);
    await access(filePath);
    const hash = createHash('sha256');
    const fileToHash = createReadStream(filePath);

    return new Promise((resolve) => {
      fileToHash.on('readable', () => {
        const chunk = fileToHash.read();
        if (chunk) {
          hash.update(chunk);
        } else {
          console.log(`${hash.digest('hex')}`);
          resolve();
        }
      });
      fileToHash.on('error', () => {
        console.error('FS operation failed');
        resolve();
      });
    });
  } catch {
    console.error('FS operation failed');
  }
};
