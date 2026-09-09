---
title: Value from @tsed/di
description: api documentation of Value from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation Value decorator
---
# Value - @tsed/di

## Usage

```typescript
import { Value } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/value.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/value.ts#L0-L0).

## Overview

```ts
function Value(expression: string, defaultValue?: unknown): PropertyDecorator;
```

-   **expression** (`string`): Dot-notation path to the configuration value

-   **defaultValue** (`unknown`): Optional. default value if not found

<!-- Description -->

## Description

Inject a reactive configuration value into a property.

Creates a getter/setter that always reflects the current configuration value.
Unlike `@Constant()`, the value is not frozen and can change at runtime.

### Usage

```typescript
import {Injectable, Value} from "@tsed/di";

@Injectable()
export class MyService {
  @Value("swagger.path")
  swaggerPath: string;

  @Value("api.port", 3000)
  port: number;

  constructor() {
    // Not available yet - undefined
  }

  $onInit() {
    console.log(this.swaggerPath); // Current value
    this.swaggerPath = "/new-path"; // Can be modified
  }
}
```

### Difference from @Constant

-   `@Constant`: Frozen immutable value (deep clone)
-   `@Value`: Reactive value (always reads current config)
