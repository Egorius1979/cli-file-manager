import { resolve } from 'path';

export const up = (currentPath, cb, excess) => {
  if (excess) return 'error';

  try {
    const newPath = resolve(currentPath, '..');
    return newPath;
  } catch (error) {
    console.error('FS operation failed');
  }
};
