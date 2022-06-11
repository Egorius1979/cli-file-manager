import { EOL, cpus, userInfo, arch } from 'os';

export const os = (currentPath, comArray) => {
  if (comArray.length !== 2) return 'error';

  const flag = comArray[1];

  const statUtilsLabels = {
    '--EOL': () => console.log(JSON.stringify(EOL)),
    '--cpus': () => console.log(cpus()),
    '--homedir': () => console.log(userInfo().homedir),
    '--username': () => console.log(userInfo().username),
    '--architecture': () => console.log(arch()),
  };

  try {
    statUtilsLabels[flag]();
  } catch {
    console.error('FS operation failed');
  }
};
