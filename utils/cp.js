import { copyFile } from 'fs/promises';
import { resolve, parse } from 'path';
import { rm } from 'fs/promises';

export const cp = async (currDir, cb, pathToFile, newDir) => {
  let fullInputArray = cb();
  if (fullInputArray.length !== 3) return 'error';

  try {
    const filename = parse(pathToFile).base;
    const fileToCopy = resolve(currDir, pathToFile);
    const newFilePath = resolve(currDir, newDir, filename);

    await copyFile(fileToCopy, newFilePath);

    if (fullInputArray[0] === 'mv') {
      await rm(fileToCopy);
    }
  } catch {
    console.error('FS operation failed');
  }
};
