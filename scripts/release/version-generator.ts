import { readFile, writeFileSync } from 'fs-extra';
import ora from 'ora';
import prettier from 'prettier';
import semver from 'semver';

import { PKG_PATH, PRETTIERRC_PATH } from '../config';

import type { SemVer } from 'semver';

const spinner = ora('generate version').start();

enum VersionType {
  TEST = 'test',
}

const validVersionType = Object.values(VersionType);

const type = process.argv.find((arg) => arg.startsWith('--type'))?.split('=')?.[1];

if (!validVersionType.includes(type as VersionType)) {
  spinner.fail(`Invalid version type: ${type}`);
  process.exit(1);
}

const VersionGenerateMap: Record<VersionType, (version: SemVer) => SemVer> = {
  [VersionType.TEST]: (version: SemVer) => {
    version.prerelease = ['test', Date.now()];
    return version;
  },
};

async function versionGenerator() {
  spinner.text = `${type} version generating!`;

  const [pkg, prettierrc] = await Promise.all([readFile(PKG_PATH), readFile(PRETTIERRC_PATH)]).then(
    (res) => res.map((r) => JSON.parse(r.toString()))
  );

  pkg.version = VersionGenerateMap[type](semver.parse(pkg.version)).format();

  const pkgJsonStr = prettier.format(JSON.stringify(pkg), {
    parser: 'json-stringify',
    ...prettierrc,
    printWidth: undefined,
  });

  writeFileSync(PKG_PATH, pkgJsonStr);

  spinner.succeed(`${type} version generated: ${pkg.version}`);
}

versionGenerator();
