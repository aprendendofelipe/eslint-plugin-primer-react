import eslintJs from '@eslint/js'
import github from 'eslint-plugin-github'
import globals from 'globals'
import pluginJest from 'eslint-plugin-jest'

const config = [
  github.getFlatConfigs().recommended,
  eslintJs.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
      },
      globals: {
        ...globals.commonjs,
        ...globals.node,
      },
    },
    rules: {
      'import/no-commonjs': 'off',
      'no-shadow': 'off',
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
        },
      ],
    },
    ignores: ['**/dist/**', '**/node_modules/**'],
  },
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        ...pluginJest.environments.globals.globals,
      },
    },
  },
  {
    files: ['.markdownlint-cli2.cjs'],
    rules: {
      'github/filenames-match-regex': 'off',
    },
  },
]

export default config
