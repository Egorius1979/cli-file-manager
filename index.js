import { stdin, stdout, argv } from 'process';
import { fileURLToPath } from 'url';
import { dirname, join, parse, resolve } from 'path';
// import { spawn } from 'child_process';
// import { ls } from './utils/ls.js';
// import { cd } from './utils/cd.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

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

let currDir = process.env.HOME;
const idxOfUserName = argv[2].indexOf('=') + 1;
const user = argv[2].slice(idxOfUserName);

console.log(`Welcome to the File Manager, ${user}!\n`);
console.log(`You are currently in ${currDir}\n`);

try {
  stdin.on('data', async (data) => {
    let commandFromCli = String(data).trim().split(' ');
    // const userCommand = commandFromCli.split(' ')[0];
    // const path = commandFromCli.slice(commandFromCli.indexOf(' ') + 1);

    // const [path1, path2] = path.includes('"')
    //   ? path.split(' "')
    //   : path.split('');
    // console.log('path1: ', path1, 'path2: ', path2);
    // return;

    // const [path1, path2] = path.includes('"')
    // console.log('path1: ', path1, 'path2: ', path2);
    // const array = path.includes('"') ? path.split('"') : path.split('');
    // console.log(array);
    // return;

    const getFullArrayOnDemand = () => {
      return commandFromCli.slice(commandFromCli.indexOf(' ') + 1);
    };

    // console.log(commandFromCli.indexOf(' '));

    const [userCommand, path1, path2] = commandFromCli;

    // const userCommand

    if (userCommand === '.exit') {
      exit();
    }
    if (commandList.find((fmСommand) => fmСommand === userCommand)) {
      const { [userCommand]: importedFunc } = await import(
        `./utils/${userCommand}.js`
      );

      // console.log(path1, path2);

      // return;

      const newPath = await importedFunc(
        currDir,
        getFullArrayOnDemand,
        path1,
        path2
      );
      if (newPath === 'error') {
        setInvalidInput();
      } else {
        currDir = newPath || currDir;
        console.log(`You are currently in ${currDir}\n`);
      }
    } else {
      // console.log('Invalid input\n');
      setInvalidInput();
    }
  });
} catch (err) {
  console.error(err.message);
}

function setInvalidInput() {
  console.log('Invalid input\n');
}

process.on('SIGINT', () => exit());

function exit() {
  console.log(`\rThank you for using File Manager, ${user}!`);
  process.exit();
}
