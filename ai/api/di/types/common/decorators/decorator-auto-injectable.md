---
title: AutoInjectable from @tsed/di
description: api documentation of AutoInjectable from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation AutoInjectable decorator
---
# AutoInjectable - @tsed/di

## Usage

```typescript
import { AutoInjectable } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/autoInjectable.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/autoInjectable.ts#L0-L0).

## Overview

```ts
function AutoInjectable(): <T extends {
    new (...args: any[]): NonNullable<unknown>;
}>(constr: T) => T;
```

<!-- Description -->

## Description

Enable automatic dependency injection for a class constructor.

Automatically resolves and injects constructor dependencies while preserving
the ability to manually pass arguments. Useful for classes that need both
automatic DI and manual instantiation flexibility.

### Usage

```typescript
import {AutoInjectable} from "@tsed/di";

@AutoInjectable()
class UserService {
  constructor(
    private database: Database,     // Automatically injected
    private logger: Logger,         // Automatically injected
    customConfig?: Config           // Can be passed manually
  ) {}
}

// Automatic injection
const service1 = new UserService();

// Manual override
const service2 = new UserService(customDb, customLogger, {debug: true});

// Partial override (remaining deps auto-injected)
const service3 = new UserService(undefined, undefined, {debug: true});
```

### Behavior

-   Automatically resolves dependencies based on TypeScript metadata
-   Manual arguments override automatic injection for that position
-   `undefined` arguments trigger automatic injection

<!-- Members -->

## new

```ts
new (...args: any[]): NonNullable<unknown>;
```
