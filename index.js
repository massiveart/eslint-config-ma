"use strict"

module.exports = {
    "env": {
        "browser": true,
        "node": false,
        "es6": true
    },
    "globals": {
        "require": true,
        "module": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "one-var": [
            "error",
            "never"
        ],
        "operator-linebreak": [
            "error",
            "before"
        ],
        "padded-blocks": [
            "error",
            "never"
        ],
        "semi": [
            "error",
            "always"
        ],
        "max-len": [
            "error",
            120
        ],
        "max-statements-per-line": [
            "error",
            {
                "max": 1
            }
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1
            }
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "object-curly-newline": [
            "error",
            {
                "minProperties": 1
            }
        ],
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "arrow-spacing": "error",
        "curly": "error",
        "eqeqeq": "error",
        "capitalized-comments": "error",
        "no-unused-expressions": "error",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "vars-on-top": "error",
        "no-undef-init": "error",
        "no-undefined": "error",
        "no-use-before-define": "error",
        "callback-return": "error",
        "no-mixed-requires": "error",
        "array-bracket-spacing": "error",
        "block-spacing": "error",
        "brace-style": "error",
        "camelcase": "error",
        "comma-spacing": "error",
        "comma-style": "error",
        "comma-dangle": "error",
        "computed-property-spacing": "error",
        "eol-last": "error",
        "func-call-spacing": "error",
        "func-name-matching": "error",
        "key-spacing": "error",
        "keyword-spacing": "error",
        "lines-around-directive": "error",
        "new-cap": [
            "error",
            {
                "capIsNewExceptions": ["$.Deferred", "jQuery.Deferred"]
            }
        ],
        "new-parens": "error",
        "newline-before-return": "error",
        "no-lonely-if": "error",
        "no-nested-ternary": "error",
        "no-trailing-spaces": "error",
        "no-underscore-dangle": "error",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "object-property-newline": "error",
        "space-before-blocks": "error",
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "error",
        "no-compare-neg-zero": "error",
        "no-negated-condition": "warn",
        "no-warning-comments": "warn",
        "global-require": "warn",
        "require-jsdoc": "warn"
    }
}

