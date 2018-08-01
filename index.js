'use strict'
const kebabCaseRegexp = /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/;

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
  ],
  rules: {
    //
    // CSS
    //
    'no-empty-source': null,
    'block-no-empty': null,
    'indentation': 2,
    'string-quotes': 'single',
    'no-descending-specificity': null,
    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment', 'blockless-after-same-name-blockless'],
        ignoreAtRules: ['else'],
      },
    ],
    'at-rule-name-space-after': 'always',
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['local', 'global', 'export'],
      }
    ],
    //
    // SCSS
    //
    // @-if
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    // @-else
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    // @-extend
    'scss/at-extend-no-missing-placeholder': true,
    // @-function
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-function-pattern': kebabCaseRegexp,
    // @-import
    'scss/at-import-no-partial-leading-underscore': true,
    // @-mixin
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-pattern': kebabCaseRegexp,
    // $-variable
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-comment', 'after-dollar-variable'],
        ignore: ['inside-single-line-block'],
      },
    ],
    'scss/dollar-variable-pattern': kebabCaseRegexp,
    // %-placeholder
    'scss/percent-placeholder-pattern': kebabCaseRegexp,
    // -comment
    'scss/double-slash-comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['between-comments', 'stylelint-commands'],
      },
    ],
    'scss/double-slash-comment-whitespace-inside': 'always',
    // Declaration
    'scss/declaration-nested-properties': 'never',
    // Operator
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
  },
};
