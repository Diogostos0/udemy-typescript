import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintPrettierConfig from 'eslint-config-prettier';
import prettierConfig from './.prettierrc.js';

export default tseslint.config(
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        sourceType: 'module',
      },
    },
  },

  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...eslintPrettierConfig.rules,
      'prettier/prettier': ['error', prettierConfig],
    },
  },
);
