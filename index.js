import { stdin, stdout, argv } from 'process';
import { getPath } from './utils/path/pathTransform.js';

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
// console.log(process);
const idxOfUserName = argv[2].indexOf('=') + 1;
const user = argv[2].slice(idxOfUserName);

console.log(`Welcome to the File Manager, ${user}!\n`);
console.log(`You are currently in ${currDir}\n`);

try {
  stdin.on('data', async (data) => {
    let commandFromCli = String(data).trim();

    if (commandFromCli.includes('"')) {
      commandFromCli = getPath(commandFromCli);
    } else {
      commandFromCli = commandFromCli.split(' ');
    }

    const [userCommand] = commandFromCli;
    if (userCommand === '.exit') exit();
    if (commandList.find((fmСommand) => fmСommand === userCommand)) {
      const { [userCommand]: importedFunc } = await import(
        `./utils/${userCommand}.js`
      );

      const runCommandGetPath = await importedFunc(currDir, commandFromCli);
      if (runCommandGetPath === 'error') {
        setInvalidInput();
      } else {
        currDir = runCommandGetPath || currDir;
        console.log(`You are currently in ${currDir}\n`);
      }
    } else {
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
