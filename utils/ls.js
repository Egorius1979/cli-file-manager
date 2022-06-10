import { readdir } from 'fs/promises';

export const ls = async (currentPath, cb, excess) => {
  if (excess) return 'error';

  try {
    const filesArray = await readdir(currentPath);
    console.log(filesArray);
  } catch {
    console.error('FS operation failed');
  }
};
