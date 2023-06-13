export type ObjectOrArray<T, K extends keyof unknown = keyof unknown> =
  | T[]
  | Record<K, T | Record<K, T> | T[]>;
