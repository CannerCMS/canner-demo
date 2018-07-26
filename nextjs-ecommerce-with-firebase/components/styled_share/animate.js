export const animFilter = (filter, value) => `
  -webkit-filter: #{${filter}}unquote('(#{${value}}})');
  -moz-filter: #{${filter}}unquote('(#{${value}}})');
  -ms-filter: #{${filter}}unquote('(#{${value}}})');
  filter: #{${filter}}unquote('(#{${value}}})');
`;

export const animTransition = (property, value) => `
  -webkit-transition: ${property}, ${value}};
  -moz-transition: ${property}, ${value}};
  -ms-transition: ${property}, ${value}};
  transition: ${property}, ${value}};
`;

export const animTransform = (property, value) => `
  -webkit-transform:  #{${property}}unquote('(#{${value}})');
  -moz-transform: #{${property}}unquote('(#{${value}})');
  -ms-transform: #{${property}}unquote('(#{${value}})');
  transform: #{${property}}unquote('(#{${value}})');
`;
