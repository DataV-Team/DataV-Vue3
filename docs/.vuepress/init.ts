import { pathExists } from 'fs-extra';
import { ES_OUTPUT_DIR } from '../../scripts/config';
import ora from 'ora';
import execa from 'execa';

const spinner = ora('check if es output exists').start();

async function init() {
  const esOutputPathExist = await pathExists(ES_OUTPUT_DIR);
  if (esOutputPathExist) {
    spinner.succeed('es output exists!');
    return;
  }

  spinner.info('building es output...');

  const buildProcess = execa('yarn', ['build:es'], { shell: true });
  buildProcess.stdout.pipe(process.stdout);
  await buildProcess;

  spinner.succeed('es output exists!');
}

init();
