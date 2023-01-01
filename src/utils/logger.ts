export function withPrefix(loggerPrefix: string) {
  const prefix = `[DataV - ${loggerPrefix}]`;

  return {
    info(...msg: string[]) {
      // eslint-disable-next-line no-console
      console.log(`${prefix} ${msg.join(' ')}`);
    },

    warn(...msg: string[]) {
      // eslint-disable-next-line no-console
      console.warn(`${prefix} ${msg.join(' ')}`);
    },

    error(...msg: string[]) {
      // eslint-disable-next-line no-console
      console.error(`${prefix} ${msg.join(' ')}`);
    },
  };
}
