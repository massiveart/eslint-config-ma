'use strict';

module.exports = {
    env: {
        browser: true,
        es2022: true,
    },
    extends: 'eslint:recommended',
    plugins: ['import'],
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        'arrow-parens': ['error', 'always'],
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1,
            }
        ],
        'quotes': ['error', 'single'],
        'one-var': ['error', 'never'],
        'operator-linebreak': ['error', 'before'],
        'padded-blocks': ['error', 'never'],
        'semi': ['error', 'always'],
        'max-len': [
            'error',
            120,
            {
                ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
            }
        ],
        'max-statements-per-line': [
            'error',
            {
                max: 1,
            }
        ],
        'no-console': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
            }
        ],
        'object-curly-spacing': ['error', 'always'],
        'object-curly-newline': ['error', {
            ObjectExpression: {
                minProperties: 1,
            },
            ObjectPattern: {
                minProperties: 1,
            },
            ImportDeclaration: 'never',
            ExportDeclaration: {
                minProperties: 1,
            }
        }],
        'object-property-newline': ['error', {
            allowAllPropertiesOnSameLine: true,
        }],
        'space-before-function-paren': ['error', 'never'],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
        }],
        'padding-line-between-statements': [
            'error',
            // The following two lines replace the deprecated "lines-around-directive" rule.
            {
                blankLine: 'always',
                prev: 'directive',
                next: '*',
            },
            {
                blankLine: 'any',
                prev: 'directive',
                next: 'directive',
            },
            // Following line replaces the deprecated "newline-before-return" rule.
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            }
        ],
        'arrow-spacing': 'error',
        'curly': 'error',
        'eqeqeq': 'error',
        'capitalized-comments': 'error',
        'no-unused-expressions': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'vars-on-top': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-use-before-define': 'error',
        'array-bracket-spacing': 'error',
        'block-spacing': 'error',
        'brace-style': 'error',
        'camelcase': 'error',
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'func-name-matching': 'error',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'new-cap': 'error',
        'new-parens': 'error',
        'no-lonely-if': 'error',
        'no-nested-ternary': 'error',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'space-before-blocks': 'error',
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        'no-negated-condition': 'warn',
        'no-warning-comments': 'warn',
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'import/no-dynamic-require': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/export': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-nodejs-modules': 'error',
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-absolute-path': 'error',
        'import/no-unused-modules': 'error',
        'import/newline-after-import': [
            'error',
            {
                count: 1,
            }
        ]
    }
}
