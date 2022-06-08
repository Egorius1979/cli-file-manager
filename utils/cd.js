import { join, dirname, resolve } from 'path';
import { readdir, access } from 'fs/promises';
import { fileURLToPath } from 'url';

export const cd = async (currentPath, pathToDir, excess) => {
  try {
    // if (excess) return 'error';

    const newPath = resolve(currentPath, pathToDir);
    await access(newPath);
    return newPath;
  } catch {
    console.error('FS operation failed');
  }
};
