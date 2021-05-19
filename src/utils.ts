export function isNumber(n: any) {
  return typeof n === 'number' && !isNaN(n);
}

export function isObject(value: any): value is Record<string, any> {
  const type = typeof value;
  return (
    value != null &&
    (type === 'object' || type === 'function') &&
    !Array.isArray(value)
  );
}

export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

export const defaultBreakpoints = [40, 52, 64].map(n => `${n}em`);

export const defaultTheme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};
