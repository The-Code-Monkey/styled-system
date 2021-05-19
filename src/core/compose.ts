import { createParser, Parser } from './parser';

export const compose = (...parsers: Parser[]) => {
  let config = {};

  parsers.forEach(parser => {
    if (!parser || !parser.config) {
      return;
    }

    config = { ...config, ...parser.config };
  });

  const parser = createParser(config);

  return parser;
};
