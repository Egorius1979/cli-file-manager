import { resolve, parse } from 'path';
import { access } from 'fs/promises';

export const cd = async (currentPath, comArray) => {
  if (comArray.length !== 2) return 'error';

  if (currentPath.startsWith(comArray[1])) {
    currentPath = '';
  }

  try {
    const newPath = resolve(currentPath, comArray[1]);
    if (parse(newPath).ext) throw Error;
    await access(newPath);
    return newPath;
  } catch {
    console.error('FS operation failed');
  }
};
