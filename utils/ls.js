import { readdir } from 'fs/promises';
import { error } from '../index.js';

export const ls = async (currentPath, comArray) => {
  if (comArray.length !== 1) return 'error';

  try {
    const filesArray = await readdir(currentPath);
    console.log(filesArray);
  } catch {
    console.error(error);
  }
};
