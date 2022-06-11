import { rm as remove } from 'fs/promises';
import { resolve } from 'path';

export const rm = async (currDir, comArray) => {
  if (comArray.length !== 2) return 'error';

  try {
    const fileToDelete = resolve(currDir, comArray[1]);
    await remove(fileToDelete);
    console.log('Done!');
  } catch {
    console.error('FS operation failed');
  }
};
