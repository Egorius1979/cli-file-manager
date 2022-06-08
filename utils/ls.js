import { readdir } from 'fs/promises';

export const ls = async (currentPath, excess) => {
  try {
    if (excess) return 'error';
    const filesArray = await readdir(currentPath);
    // console.log(currentPath);
    console.log(filesArray);
  } catch {
    console.error('FS operation failed');
  }
};
