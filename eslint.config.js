import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  // Config base do TypeScript
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true, // Habilita análise de tsconfig.json
        sourceType: 'module', // Força módulos ESM
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // Integração com Prettier
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  }
);
