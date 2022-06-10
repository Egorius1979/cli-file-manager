import { cp } from './cp.js';

export const mv = (currDir, cb, pathToFile, newDir) => {
  cp(currDir, cb, pathToFile, newDir);
};
