import path from 'path';

import { copy, pathExists } from 'fs-extra';
import ora from 'ora';

import { DEV_DIR } from '../config';

const DEV_ENV_DIR = path.join(__dirname, './dev-env');

const spinner = ora('Check whether the ./dev folder is created').start();

async function init() {
  const devPathExist = await pathExists(DEV_DIR);
  if (devPathExist) {
    spinner.info('./dev folder is created, dev service will start!');
    return;
  }

  spinner.info('Creating ./dev folder...');

  await copy(DEV_ENV_DIR, DEV_DIR);

  spinner.info('./dev folder created successfully, dev service will start!');
}

init();
