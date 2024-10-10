/**
 * keyof 의 value 버전
 * @example
 * ```ts
 * export const obj = {
 *     a: 'A',
 *     b: 'B',
 * } as const;
 *
 * // ValueType = 'A' | 'B'
 * export type ValueType = ValueOf<typeof obj>;
 * ```
 */
export type ValueOf<T extends Record<string | number | symbol, unknown>> =
  T[keyof T];
