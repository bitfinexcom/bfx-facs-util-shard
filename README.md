# bfx-facs-util-shard

## Development

```
git clone https://github.com/bitfinexcom/bfx-facs-util-shard
cd bfx-facs-util-shard
git remote add upstream https://github.com/bitfinexcom/bfx-facs-base

```

## Usage

In your service, run:

```
npm i --save https://github.com/bitfinexcom/bfx-facs-util-shard
```

### Integration
UtilShard is a class that extends from Facility, the main class in bfx-facs-base.

```js

## Instance an object
const UtilShard = require('bfx-facs-util-shard')
const utilShard = new UtilShard (caller, opts, ctx)


```
## Main functions

### getStrVal(str)

Assumes the argument is a standard JS string and calculates the hash of the UTF-8 encoding.
```js
var stringHash = utilShard.getStrVal('Some string')
```

### getRingIx(a,b)

If argument is are non null returns `a % b` else returns 0
```js
var res = utilShard.getRingIx(a, b)
```

### getStrRingIx(str,b)

Combines both functions explain before and return the `stringHash % b`
```js
var res = utilShard.getStrRingIx('Some string', b)
```
