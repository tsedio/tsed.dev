---
title: Opts from @tsed/di
description: api documentation of Opts from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation Opts decorator
---
# Opts - @tsed/di

## Usage

```typescript
import { Opts } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/opts.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/opts.ts#L0-L0).

## Overview

```ts
function Opts(target: any, propertyKey: string | symbol | undefined, index: number): void;
```

-   **target** (`any`): The target class

-   **propertyKey** (`string` | `symbol` | `undefined`): The constructor method name

-   **index** (`number`): The parameter index

<!-- Description -->

## Description

Inject custom options passed to a provider instance.

Used in configurable providers to receive options from the injection context.
Automatically changes the provider scope to `INSTANCE` since each invocation may have different options.

### Usage

```typescript
import {Injectable, Opts, UseOpts} from "@tsed/di";

@Injectable()
class MyConfigurableService {
  source: string;

  constructor(@Opts options: any = {}) {
    console.log("Hello", options.source);
    this.source = options.source;
  }
}

@Injectable()
class MyService1 {
  constructor(@UseOpts({source: 'Service1'}) service: MyConfigurableService) {
    console.log(service.source); // "Service1"
  }
}

@Injectable()
class MyService2 {
  constructor(@UseOpts({source: 'Service2'}) service: MyConfigurableService) {
    console.log(service.source); // "Service2"
  }
}
```

### Warning

Using `@Opts` changes the provider scope to `ProviderScope.INSTANCE`,
meaning a new instance is created for each injection.
