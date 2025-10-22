import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['src/**/*.{ts,cts}'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
]);
