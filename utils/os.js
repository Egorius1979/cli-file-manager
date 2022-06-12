import { EOL, cpus, userInfo, arch } from 'os';

export const os = (currentPath, comArray) => {
  if (comArray.length !== 2) return 'error';

  const flag = comArray[1];

  const statUtilsLabels = {
    '--EOL': () => console.log(JSON.stringify(EOL)),
    '--cpus': () => {
      const cpu = cpus().map(
        (cpu, index) =>
          `${index + 1}: ${cpu.model}, speed: ${
            cpu.speed > 100 ? cpu.speed / 1000 : cpu.speed / 10
          } GHz`
      );
      console.log('amount of CPUs: ', cpu.length);
      console.log(cpu);
    },
    '--homedir': () => console.log(userInfo().homedir),
    '--username': () => console.log(userInfo().username),
    '--architecture': () => console.log(arch()),
  };

  try {
    statUtilsLabels[flag]();
  } catch (e) {
    console.error(e);
    console.error('FS operation failed');
  }
};
