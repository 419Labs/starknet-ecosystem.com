import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintReact from 'eslint-plugin-react'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import eslintNext from '@next/eslint-plugin-next'
import globals from 'globals'

export default tseslint.config(
  // Base recommended rules
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // React and Next.js configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'react': eslintReact,
      'react-hooks': eslintReactHooks,
      '@next/next': eslintNext,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        React: 'readonly',
        JSX: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // React rules
      ...eslintReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Not needed with Next.js
      'react/prop-types': 'off', // Using TypeScript
      'react/no-danger': 'error',
      'react/no-array-index-key': 'error',
      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Next.js rules
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'error',
      '@next/next/no-sync-scripts': 'error',
      '@next/next/no-head-element': 'error',
      '@next/next/no-unwanted-polyfillio': 'warn',
      '@next/next/no-page-custom-font': 'error',
      '@next/next/no-document-import-in-page': 'error',

      // Custom rules
      'no-console': 'off',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
    },
    settings: {
      react: {
        version: 'detect',
      },
      next: {
        rootDir: '.',
      },
    },
  },

  // Ignore patterns
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'public/scripts/*',
      '*.config.js',
      '*.config.mjs',
      'coverage/**',
      'dist/**',
    ],
  },
)