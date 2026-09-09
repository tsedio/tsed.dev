---
url: /api/di/types/common/decorators/decorator-inject.md
description: api documentation of Inject from @tsed/di
---

## Usage

```typescript
import { Inject } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/inject.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/inject.ts#L0-L0).

## Overview

```ts
function Inject<T = any>(token?: TokenProvider<T> | (() => TokenProvider<T>), transform?: TransformInjectedProviderCB<T>): any;
export function Inject<T = any>(token?: TokenProvider<T> | (() => TokenProvider<T>), opts?: Partial<Omit<BindInjectablePropertyOpts<T>, "token">>): any;
```

* **token** (`TokenProvider<T>` | `(() => TokenProvider<T>)`): Optional. The provider token to inject ( for constructor params with TypeScript metadata)

* **transform** (`TransformInjectedProviderCB<T>`): Optional. transformation function or injection options

## Description

Inject a provider into a constructor parameter or property.

Explicitly declares a dependency injection for constructor parameters or class properties.
Supports custom tokens, transformations, and injection options.

### Usage

```typescript
import {Injectable, Inject} from "@tsed/di";

const CONNECTION = Symbol.for("CONNECTION");

@Injectable()
export class MyService {
  // Property injection
  @Inject(CONNECTION)
  connection: Database;

  // Constructor injection
  constructor(
    @Inject(CONNECTION) private db: Database,
    private otherService: OtherService // Auto-injected
  ) {}
}

// With transformation
@Injectable()
export class ProcessorService {
  @Inject(DataService, (service) => service.getData())
  initialData: any[];
}
```
