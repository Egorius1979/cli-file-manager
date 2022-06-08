import { stdin, stdout, argv } from 'process';
import { fileURLToPath } from 'url';
import { dirname, join, parse } from 'path';
// import { spawn } from 'child_process';
// import { ls } from './utils/ls.js';
// import { cd } from './utils/cd.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const homeDir = process.env.HOME;
const idxOfUserName = argv[2].indexOf('=') + 1;
const user = argv[2].slice(idxOfUserName);

console.log(`Welcome to the File Manager, ${user}!\n`);
console.log(`You are currently in ${homeDir}\n`);

const commandList = [
  'up',
  'cd',
  'ls',
  'cat',
  'add',
  'rn',
  'cp',
  'mv',
  'rm',
  'os',
  'hash',
  'compress',
  'decompress',
];

try {
  stdin.on('data', async (data) => {
    const commandFromCli = String(data).trim();
    if (commandFromCli === '.exit') {
      exit();
    }
    if (commandList.find((com) => com === commandFromCli)) {
      const { [commandFromCli]: importedFunc } = await import(
        `./utils/${commandFromCli}.js`
      );
      importedFunc(homeDir);
    } else {
      console.log('Invalid input\n');
    }
  });
} catch (err) {
  console.error(err.message);
}

process.on('SIGINT', () => exit());

function exit() {
  console.log(`\rThank you for using File Manager, ${user}!`);
  process.exit();
}
