import { createParser, Parser } from './parser';

export const compose = (...parsers: Parser[]): Parser => {
  let config = {};

  parsers.forEach(parser => {
    if (!parser || !parser.config) {
      return;
    }

    config = { ...config, ...(parser as { config: object }).config };
  });

  return createParser(config);
};
