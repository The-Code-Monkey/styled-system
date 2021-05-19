export function get<T = any>(
  obj: any,
  path: string | number,
  fallback?: any
): T {
  const key = typeof path === 'string' ? path.split('.') : [path];

  let result: any = obj;

  for (let i = 0; i < key.length; i += 1) {
    if (!result) {
      break;
    }

    result = result[key[i]];
  }

  return result === undefined ? fallback : result;
}

export function merge(a: Record<string, unknown>, b: Record<string, unknown>) {
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
  const result: any = {};

  Object.keys(obj)
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    )
    .forEach(key => {
      result[key] = obj[key];
    });

  return result;
}
