import { resolve, parse } from 'path';
import { rm } from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises';
import { pipeline } from 'stream';

export const cp = async (currDir, comArray) => {
  if (comArray.length !== 3) return 'error';

  try {
    const filename = parse(comArray[1]).base;
    const fileToCopy = resolve(currDir, comArray[1]);
    const newFilePath = resolve(currDir, comArray[2], filename);

    await access(fileToCopy);

    const readStrm = createReadStream(fileToCopy);
    const writeStrm = createWriteStream(newFilePath);

    return new Promise((resolve) => {
      pipeline(readStrm, writeStrm, (e) => {
        if (e) {
          console.error('FS operation failed');
          resolve();
        } else {
          if (comArray[0] === 'mv') {
            rm(fileToCopy);
          }
          console.log('Done!');
          resolve();
        }
      });
    });
  } catch {
    console.error('FS operation failed');
  }
};
