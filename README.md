# @atxmtx/title-mode

[![npm](https://flat.badgen.net/npm/license/@atxmtx/title-mode)](https://www.npmjs.org/package/@atxmtx/title-mode)
[![npm](https://flat.badgen.net/npm/v/@atxmtx/title-mode)](https://www.npmjs.org/package/@atxmtx/title-mode)
[![CircleCI](https://flat.badgen.net/circleci/github/atxmtx/title-mode)](https://circleci.com/gh/atxmtx/title-mode)
[![David](https://flat.badgen.net/david/dep/atxmtx/title-mode)](https://david-dm.org/atxmtx/title-mode)

Appends indicator to document title if Atom is running in developer mode

## Installation

`npm install @atxmtx/title-mode -S`

## Usage

Import the module into your Atom package, then invoke it in your `activate` method

**Examples**:

```js
// JavaScript
import titleMode from '@atxmtx/title-mode';

export async function activate() {
    titleMode();
};
```

```coffee
# CoffeeScript
const titleMode = require "@atxmtx/title-mode"

module.exports =
  activate: () ->
    titleMode()
```

## License

This work is dual-licensed under [The MIT License](https://opensource.org/licenses/MIT) and the [GNU General Public License, version 2.0](https://opensource.org/licenses/GPL-2.0)
