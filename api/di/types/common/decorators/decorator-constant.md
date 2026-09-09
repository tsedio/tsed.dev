---
url: /api/di/types/common/decorators/decorator-constant.md
description: api documentation of Constant from @tsed/di
---

## Usage

```typescript
import { Constant } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/constant.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/constant.ts#L0-L0).

## Overview

```ts
function Constant<Type = unknown>(expression: string, defaultValue?: Type): PropertyDecorator;
```

* **expression** (`string`): Dot-notation path to the configuration value

* **defaultValue** (`Type`): Optional. default value if not found

## Description

Inject a frozen configuration value into a property.

Retrieves a value from the injector configuration and freezes it (creates an immutable deep clone).
The value is lazily loaded on first access and cached for subsequent accesses.

### Usage

```typescript
import {Injectable, Constant} from "@tsed/di";
import {Env} from "@tsed/core";

@Injectable()
export class MyService {
  @Constant("env")
  env: Env;

  @Constant("api.baseUrl")
  apiUrl: string;

  @Constant("api.timeout", 5000)
  timeout: number;

  constructor() {
    // Not available yet - undefined
  }

  $onInit() {
    console.log(this.env); // Value is available
  }
}
```
