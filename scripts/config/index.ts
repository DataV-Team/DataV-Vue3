import path from 'path';

export const ROOT_DIR = process.cwd();
export const DEV_DIR = path.join(ROOT_DIR, '/.dev');
export const ENTRY = path.join(ROOT_DIR, '/src/index');
export const STYLED_PLACEHOLDER = '.__STYLED__';
