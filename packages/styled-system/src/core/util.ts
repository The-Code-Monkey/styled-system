export function get<T = string | number>(
  obj: object,
  path: string | number,
  fallback?: string | number | T
): T {
  const key = typeof path === 'string' ? path.split('.') : [path];

  let result: object = obj;

  for (let i = 0; i < key.length; i += 1) {
    if (!result) {
      break;
    }

    result = result[key[i]];
  }

  return (result === undefined ? fallback : result) as unknown as T;
}

export function merge(
  a: Record<string, string | number | object>,
  b: Record<string, string | number | object>
) {
  const result = { ...a, ...b };

  Object.keys(result).forEach(key => {
    if (!a[key] || typeof b[key] !== 'object') {
      return;
    }

    Object.assign(result, { [key]: Object.assign(a[key], b[key]) });
  });

  return result;
}

export function sort(obj: Record<string, unknown>) {
  const result: object = {};

  Object.keys(obj)
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    )
    .forEach(key => {
      result[key] = obj[key];
    });

  return result;
}
