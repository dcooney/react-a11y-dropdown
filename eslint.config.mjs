import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import js from '@eslint/js'
import {FlatCompat} from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
   baseDirectory: __dirname,
   recommendedConfig: js.configs.recommended,
   allConfig: js.configs.all
})

export default [
   {
      ignores: [
         '**/build/',
         '**/node_modules/',
         '**/dist/',
         'src/demo',
         'docs/'
      ]
   },
   ...compat.extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime'
   ),
   {
      rules: {
         'react/prop-types': 'off',
         'no-console': [
            'error',
            {
               allow: ['warn', 'error']
            }
         ]
      }
   },
   {
      languageOptions: {
         globals: {
            ...globals.browser,
            ...globals.node
         }
      },
      plugins: {'react-hooks': reactHooks},
      settings: {
         react: {
            version: 'detect'
         }
      }
   }
]
