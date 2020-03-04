# @atxm/title-mode

[![npm](https://flat.badgen.net/npm/license/@atxm/title-mode)](https://www.npmjs.org/package/@atxm/title-mode)
[![npm](https://flat.badgen.net/npm/v/@atxm/title-mode)](https://www.npmjs.org/package/@atxm/title-mode)
[![CircleCI](https://flat.badgen.net/circleci/github/a-t-x-m/title-mode)](https://circleci.com/gh/a-t-x-m/title-mode)
[![David](https://flat.badgen.net/david/dep/a-t-x-m/title-mode)](https://david-dm.org/a-t-x-m/title-mode)

Appends indicator to document title if Atom is running in developer mode

## Installation

`npm install @atxm/title-mode -S`

## Usage

Import the module into your Atom package, then invoke it in your `activate` method

**Examples**:

```js
// JavaScript
import titleMode from '@atxm/title-mode';

export async function activate() {
    titleMode();
};
```

```coffee
# CoffeeScript
const titleMode = require "@atxm/title-mode"

module.exports =
  activate: () ->
    titleMode()
```

## License

This work is dual-licensed under [The MIT License](https://opensource.org/licenses/MIT) and the [GNU General Public License, version 2.0](https://opensource.org/licenses/GPL-2.0)
