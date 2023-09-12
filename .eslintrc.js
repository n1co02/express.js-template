module.exports = {
  extends: ['./eslint/node'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        project: './tsconfig.eslint.json',
      },
    },
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  root: true,

  rules: {
    'prettier/prettier': 'off',
  },
};
