import { resolve } from 'path';
import { writeFile } from 'fs/promises';

export const add = async (currDir, cb, filename) => {
  let fullInputArray = cb();
  if (fullInputArray.length !== 2) return 'error';

  try {
    const fileToRead = resolve(currDir, filename);
    await writeFile(fileToRead, '', { flag: 'ax' });
    console.log('\nDone!');
  } catch {
    console.error('FS operation failed');
  }
};
