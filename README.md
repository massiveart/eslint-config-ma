# eslint-config-ma

[![CircleCi](https://circleci.com/gh/massiveart/eslint-config-ma.png?style=shield)](https://circleci.com/gh/massiveart/eslint-config-ma)
[![npm](https://img.shields.io/npm/v/eslint-config-ma.svg)](https://www.npmjs.com/package/eslint-config-ma)
[![Size](https://img.shields.io/github/size/massiveart/eslint-config-ma/index.js.svg)](https://github.com/massiveart/eslint-config-ma/blob/main/index.js)
[![Install Size](https://packagephobia.now.sh/badge?p=eslint-config-ma)](https://packagephobia.now.sh/result?p=eslint-config-ma)

Stylelint shareable config used by MASSIVE ART.

## Installation

To make use of this config, install this package as development dependency of your project:

```bash
npm install eslint-config-ma --save-dev
```

## Usage

Create a [`.eslintrc`](https://eslint.org/docs/user-guide/configuring) config file:

### .eslintrc

```js
{
    "extends": "eslint-config-ma"
}
```

## Version Update & Publish to NPM

### 1. Create release on github

Update package.json version on main branch:

```bash
git checkout main
git pull origin main
npm version [ major | minor | patch ] --no-git-tag-version
git add .
git commit -m "Release <version>"
git push origin main
```

Generate changelog:

```bash
github_changelog_generator --future-release <version>
```

Copy the text of the last release into and get new release.

### 2. Publish release

```
git fetch --tags
git checkout <version>
rm CHANGELOG.md # else it will be published with it
npm pack --dry-run # check that no unnecessary files are packed
npm publish
```

