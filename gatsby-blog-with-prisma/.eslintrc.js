module.exports = {
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
  ],
  "globals": {
    __PATH_PREFIX__: true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  },
  "rules": {
    "quotes": ["error", "single"]
  }
}
