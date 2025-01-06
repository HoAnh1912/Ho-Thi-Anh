// Recursive type to generate dot notation keys
export type DotNotation<T, Prefix extends string = ""> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ?
        | `${Prefix}${Extract<K, string>}`
        | DotNotation<T[K], `${Prefix}${Extract<K, string>}.`>
    : `${Prefix}${Extract<K, string>}`;
}[keyof T];
