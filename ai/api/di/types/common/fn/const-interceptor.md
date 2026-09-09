---
title: interceptor from @tsed/di
description: api documentation of interceptor from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation interceptor const
---
# interceptor - @tsed/di

## Usage

```typescript
import { interceptor } from "@tsed/di";
```

> See [/packages/di/src/common/fn/injectable.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/fn/injectable.ts#L0-L0).

## Overview

```ts
const interceptor: {
    <Token extends import("@tsed/core").Type>(token: Token, options?: Partial<ProviderOpts>): TsED.ClassProviderBuilder<Token>;
    <Token extends unknown>(token: Token, options?: Partial<ProviderOpts>): TsED.ProviderBuilder<Token>;
};
```

<!-- Description -->

## Description

Fluent builder for registering interceptor providers.

Specialized version of `injectable` that automatically sets the provider type to `INTERCEPTOR`.

### Usage

```typescript
import {interceptor} from "@tsed/di";

interceptor(LogInterceptor).build();
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
