---
title: refValue from @tsed/di
description: api documentation of refValue from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation refValue function
---
# refValue - @tsed/di

## Usage

```typescript
import { refValue } from "@tsed/di";
```

> See [/packages/di/src/common/fn/refValue.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/fn/refValue.ts#L0-L0).

## Overview

```ts
function refValue<Type>(expression: string): {
    value: Type | undefined;
};
export function refValue<Type>(expression: string, defaultValue: Type | undefined): {
    value: Type;
};
```

-   **expression** (`string`): Dot-notation path to the configuration value

-   **defaultValue** (\`\`): default value if the expression is not found

<!-- Description -->

## Description

Create a reactive reference to a configuration value.

Returns an object with a `value` getter that always fetches the current configuration value.
Useful for creating properties that stay synchronized with configuration changes.

### Usage

```typescript
import {refValue, Injectable} from "@tsed/di";

@Injectable()
class Test {
  logLevel = refValue<string>("logger.level", "info");
  port = refValue<number>("server.port");

  constructor() {
    console.log(this.logLevel.value); // Always current value
  }
}
```

<!-- Members -->

## value

```ts
value: Type | undefined;
```

## value

```ts
value: Type;
```
