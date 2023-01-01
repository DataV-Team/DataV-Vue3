import { pathExists } from 'fs-extra';
import { ES_OUTPUT_DIR } from '../../scripts/config';
import ora from 'ora';
import execa from 'execa';

const spinner = ora('Check if es output exists').start();

async function init() {
  const esOutputPathExist = await pathExists(ES_OUTPUT_DIR);
  if (esOutputPathExist) {
    spinner.succeed('Es output exists!');
    return;
  }

  spinner.info('Building es output...');

  const buildProcess = execa('yarn', ['build:es'], { shell: true });
  buildProcess.stdout.pipe(process.stdout);
  await buildProcess;

  spinner.succeed('Es output build successfully!');
}

init();
