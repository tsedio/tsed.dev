---
title: injectable from @tsed/di
description: api documentation of injectable from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation injectable const
---
# injectable - @tsed/di

## Usage

```typescript
import { injectable } from "@tsed/di";
```

> See [/packages/di/src/common/fn/injectable.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/fn/injectable.ts#L0-L0).

## Overview

```ts
const injectable: {
    <Token extends import("@tsed/core").Type>(token: Token, options?: Partial<ProviderOpts>): TsED.ClassProviderBuilder<Token>;
    <Token extends unknown>(token: Token, options?: Partial<ProviderOpts>): TsED.ProviderBuilder<Token>;
};
```

<!-- Description -->

## Description

Fluent builder for registering providers programmatically.

Creates or configures a provider with the specified options.
Can be chained with additional configuration methods.

### Usage

```typescript
import {injectable} from "@tsed/di";

injectable(MyService)
  .scope(ProviderScope.REQUEST)
  .deps([DatabaseService])
  .build();

// With factory
injectable("CONFIG")
  .factory(() => loadConfig())
  .build();
```

<!-- Members -->

##

```ts
<Token extends import("@tsed/core").Type>(token: Token, options?: Partial<ProviderOpts>): TsED.ClassProviderBuilder<Token>;
```

##

```ts
<Token extends unknown>(token: Token, options?: Partial<ProviderOpts>): TsED.ProviderBuilder<Token>;
```
