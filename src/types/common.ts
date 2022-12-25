/**
 * https://github.com/Microsoft/TypeScript/issues/29729
 */
export type LiteralUnion<T extends U, U> = T | (U & {});

export type Point = [number, number];
