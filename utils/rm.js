import { rm as remove } from 'fs/promises';
import { resolve } from 'path';

export const rm = async (currDir, cb, pathToFile) => {
  let fullInputArray = cb();
  if (fullInputArray.length !== 2) return 'error';

  try {
    const fileToDelete = resolve(currDir, pathToFile);
    await remove(fileToDelete);
  } catch (error) {
    console.error('FS operation failed');
  }
};
