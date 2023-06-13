import { Properties } from 'csstype';

import { createParser, Parser } from './parser';
import {
  createStyleFunction,
  CreateStyleFunctionArgs,
  StyleFn,
} from './styleFunction';

export type SystemConfig<T extends string> = {
  [key in T]: boolean | CreateStyleFunctionArgs;
};

export function system(args: SystemConfig<string> = {}): Parser {
  const config: { [key: string]: StyleFn } = {};

  Object.keys(args).forEach(key => {
    const argConfig = args[key];

    if (argConfig === false) {
      return;
    }

    // shorthand definition
    if (argConfig === true) {
      config[key] = createStyleFunction({
        property: key as keyof Properties,
        scale: key,
      });

      return;
    }

    if (typeof argConfig === 'function') {
      config[key] = argConfig;
      return;
    }

    config[key] = createStyleFunction(argConfig);
  });

  return createParser(config);
}
