# better-is-even </br> [![NPM Version](https://img.shields.io/npm/v/@tnk-rin/better-is-even.svg?style=flat)](https://www.npmjs.com/package/@tnk-rin/better-is-even) [![NPM monthly downloads](https://img.shields.io/npm/dm/@tnk-rin/better-is-even.svg?style=flat)](https://www.npmjs.com/package/@tnk-rin/better-is-even) [![NPM Total Downloads](https://img.shields.io/npm/dt/@tnk-rin/better-is-even.svg?style=flat)](https://www.npmjs.com/package/@tnk-rin/better-is-even)

The better implementation of is-even™

# Install

`npm install @tnk-rin/better-is-even`

# Usage

```js
const isEven = require('@tnk-rin/better-is-even');

isEven(16);
// > true
isEven("15-2");
// > [false, true]
isEven(2);
// > true
isEven(false);
// > true
isEven([12, 15, 3, 26, 20]);
// > [true, false, false, true, true]
```
