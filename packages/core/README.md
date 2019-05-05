# @openci/core

## installation

```
yarn add @openci/core
// or
npm i @openci/core
```

## usage

```js
import { [Function] } from '@openci/core'
```

## functions

### `validate`

_`function (data): void`_

Validates a JSON data structure (most likely an object) against the spec. Throws an error if the
data is not valid.

#### example

```js
import { validate } from "@openci/core";

try {
  validate({ foo: bar });
} catch (error) {
  console.error(error.message);
  // --> "data.jobs should be array"
}
```

### `isValid`

_`function (data): boolean`_

Validates a JSON data structure (most likely an object) against the spec. Returns true is the data
adheres to the spec, false otherwise.
