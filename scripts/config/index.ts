import path from 'path';

export const ROOT_DIR = process.cwd();

export const PKG_PATH = path.join(ROOT_DIR, './package.json');

export const PRETTIERRC_PATH = path.join(ROOT_DIR, './.prettierrc');

export const DEV_DIR = path.join(ROOT_DIR, '/.dev');

export const ENTRY = path.join(ROOT_DIR, '/src/index');

export const ES_OUTPUT_DIR = path.join(ROOT_DIR, '/es');

export const STYLED_PLACEHOLDER = '.__STYLED__';
