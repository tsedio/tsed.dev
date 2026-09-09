---
title: ModuleOptions from @tsed/di
description: api documentation of ModuleOptions from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation ModuleOptions interface
---
# ModuleOptions - @tsed/di

## Usage

```typescript
import { ModuleOptions } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/module.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/module.ts#L0-L0).

## Overview

```ts
interface ModuleOptions extends Omit<TsED.Configuration, "scopes"> {
    scope?: ProviderScope;
    imports?: TokenProvider[];
    deps?: TokenProvider[];
    [key: string]: any;
}
```

<!-- Members -->

## scope

```ts
scope?: ProviderScope;
```

Provider scope

## imports

```ts
imports?: TokenProvider[];
```

Providers must be initialized before building this module

## deps

```ts
deps?: TokenProvider[];
```

Explicit token must be injected in the constructor

## \[key: string]

```ts
[key: string]: any;
```

Additional properties are stored as provider configuration.
