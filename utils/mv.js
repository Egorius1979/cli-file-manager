import { cp } from './cp.js';

export const mv = (currDir, comArray) => {
  return cp(currDir, comArray);
};
