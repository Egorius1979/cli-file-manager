import { resolve } from 'path';
import { error } from '../index.js';

export const up = (currentPath, comArray) => {
  if (comArray.length !== 1) return 'error';

  try {
    const newPath = resolve(currentPath, '..');
    return newPath;
  } catch {
    console.error(error);
  }
};
