import { resolve } from 'path';
import { writeFile } from 'fs/promises';

export const add = async (currDir, comArray) => {
  if (comArray.length !== 2) return 'error';

  try {
    const newFileName = resolve(currDir, comArray[1]);
    await writeFile(newFileName, '', { flag: 'ax' });
    console.log('Done!');
  } catch {
    console.error('FS operation failed');
  }
};
