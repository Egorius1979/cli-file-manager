import { rename as fileRename } from 'fs/promises';
import { dirname, resolve } from 'path';
import { error } from '../index.js';

export const rn = async (currDir, comArray) => {
  if (comArray.length !== 3) return 'error';

  try {
    const fileToRename = resolve(currDir, comArray[1]);
    process.chdir(dirname(fileToRename));
    await fileRename(fileToRename, comArray[2]);
    console.log('Done!');
  } catch {
    console.error(error);
  }
};
