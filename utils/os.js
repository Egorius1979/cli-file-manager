import { EOL, cpus, userInfo, arch } from 'os';

export const os = (currentPath, comArray) => {
  if (comArray.length !== 2) return 'error';

  const flag = comArray[1];

  try {
    switch (flag) {
      case '--EOL':
        console.log(JSON.stringify(EOL));
        break;
      case '--cpus':
        const cpu = cpus().map(
          (cpu, index) =>
            `${index + 1}: ${cpu.model}, speed: ${cpu.speed / 1000} GHz`
        );
        console.log(cpu);
        break;
      case '--homedir':
        () => console.log(userInfo().homedir);
        break;
      case '--username':
        () => console.log(userInfo().username);
        break;
      case '--architecture':
        () => console.log(arch());
      default:
        console.error('FS operation failed');
    }
  } catch {
    console.error('FS operation failed');
  }
};
