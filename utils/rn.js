import { rename as fileRename } from 'fs/promises';
import { dirname, resolve } from 'path';

export const rn = async (currDir, cb, pathToFile, newFilename) => {
  let fullInputArray = cb();
  if (fullInputArray.length !== 3) return 'error';

  try {
    const fileToRename = resolve(currDir, pathToFile);
    process.chdir(dirname(fileToRename));
    await fileRename(fileToRename, newFilename);
  } catch {
    console.error('FS operation failed');
  }
};
