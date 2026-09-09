---
url: /api/di/types/common/decorators/decorator-use-opts.md
description: api documentation of UseOpts from @tsed/di
---

## Usage

```typescript
import { UseOpts } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/useOpts.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/useOpts.ts#L0-L0).

## Overview

```ts
function UseOpts(options: {
    [key: string]: any;
}): Function;
```

## Description

Pass custom options to an injected provider.

Supplies configuration options when injecting a provider that accepts `@Opts`.
Works with constructor parameters and property injection.

### Usage

```typescript
import {Injectable, Opts, UseOpts} from "@tsed/di";

@Injectable()
class MyConfigurableService {
  source: string;

  constructor(@Opts options: any = {}) {
    this.source = options.source;
  }
}

@Injectable()
class MyService1 {
  // Constructor parameter with options
  constructor(@UseOpts({source: 'Service1'}) service: MyConfigurableService) {
    console.log(service.source); // "Service1"
  }
}

@Injectable()
class MyService2 {
  // Property injection with options
  @Inject(MyConfigurableService)
  @UseOpts({source: 'Service2'})
  service: MyConfigurableService;
}
```

### Warning

The injected provider must use `@Opts` to receive these options.
Using `@Opts` automatically sets the provider scope to `INSTANCE`.

## \[key: string]

```ts
[key: string]: any;
```
