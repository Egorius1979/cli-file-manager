import { resolve } from 'path';
import { access } from 'fs/promises';

export const cd = async (currentPath, cb, pathToDir) => {
  let fullInputArray = cb();
  if (fullInputArray.length !== 2) return 'error';

  if (currentPath.includes(pathToDir)) {
    currentPath = '';
  }

  try {
    const newPath = resolve(currentPath, pathToDir);
    await access(newPath);
    return newPath;
  } catch {
    console.error('FS operation failed');
  }
};
