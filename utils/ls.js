import { readdir } from 'fs/promises';

export const ls = async (currentPath) => {
  try {
    const filesArray = await readdir(currentPath);
    console.log(filesArray);
  } catch {
    console.error('FS operation failed');
  }
};

// export default ls;
