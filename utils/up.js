import { join } from 'path';

export const up = async (currentPath, excess) => {
  try {
    if (excess) return 'error';
    const newPath = join(currentPath, '..');
    return newPath;
  } catch {
    console.error('FS operation failed');
  }
};
