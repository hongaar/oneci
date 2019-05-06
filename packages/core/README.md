# @oneci/core

## installation

```
yarn add @oneci/core
// or
npm i @oneci/core
```

## usage

```js
import { [Function] } from '@oneci/core'
```

## functions

### `validate`

_`function (data): void`_

Validates a JSON data structure (most likely an object) against the spec. Throws an error if the
data is not valid.

#### example

```js
import { validate } from "@oneci/core";

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
