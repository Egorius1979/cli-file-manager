import { createReadStream, createWriteStream } from 'fs';
import { resolve, parse } from 'path';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream';
import { access } from 'fs/promises';
import { error } from '../index.js';

export const compress = async (currDir, pathArr) => {
  if (pathArr.length !== 3) return 'error';

  try {
    const filePath = resolve(currDir, pathArr[1]);
    const brFilePath = resolve(
      currDir,
      pathArr[2],
      `${parse(pathArr[1]).base}.br`
    );

    await access(filePath);

    const readStrm = createReadStream(filePath);
    const writeStrm = createWriteStream(brFilePath);
    const br = createBrotliCompress();

    return new Promise((resolve) => {
      pipeline(readStrm, br, writeStrm, (e) => {
        if (e) {
          console.error(error);
          resolve();
        } else {
          console.log('Done!');
          resolve();
        }
      });
    });
  } catch {
    console.error(error);
  }
};
