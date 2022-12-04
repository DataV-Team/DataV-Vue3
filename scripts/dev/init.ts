import path from 'path';

import { copy, pathExists } from 'fs-extra';

import { DEV_DIR } from '../config';

const DEV_ENV_DIR = path.join(__dirname, './dev-env');

async function init() {
  const devPathExist = await pathExists(DEV_DIR);
  if (devPathExist) return;

  await copy(DEV_ENV_DIR, DEV_DIR);
}

init();
