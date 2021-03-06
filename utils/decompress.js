import { createReadStream, createWriteStream } from 'fs';
import { resolve, basename } from 'path';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream';
import { access } from 'fs/promises';
import { error } from '../index.js';

export const decompress = async (currDir, pathArr) => {
  if (pathArr.length !== 3) return 'error';

  try {
    const bpFilePath = resolve(currDir, pathArr[1]);
    const unZipFilePath = resolve(
      currDir,
      pathArr[2],
      basename(bpFilePath, '.br')
    );

    await access(bpFilePath);

    const readStrm = createReadStream(bpFilePath);
    const writeStrm = createWriteStream(unZipFilePath);
    const unZip = createBrotliDecompress();

    return new Promise((resolve) => {
      pipeline(readStrm, unZip, writeStrm, (e) => {
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
