---
title: controller from @tsed/di
description: api documentation of controller from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation controller const
---
# controller - @tsed/di

## Usage

```typescript
import { controller } from "@tsed/di";
```

> See [/packages/di/src/common/fn/injectable.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/fn/injectable.ts#L0-L0).

## Overview

```ts
const controller: {
    <Token extends import("@tsed/core").Type>(token: Token, options?: Partial<ProviderOpts>): TsED.ClassProviderBuilder<Token>;
    <Token extends unknown>(token: Token, options?: Partial<ProviderOpts>): TsED.ProviderBuilder<Token>;
};
```

<!-- Description -->

## Description

Fluent builder for registering controller providers.

Specialized version of `injectable` that automatically sets the provider type to `CONTROLLER`
and supports controller-specific options like middlewares.

### Usage

```typescript
import {controller} from "@tsed/di";

controller(UsersController)
  .middlewares({useBefore: [AuthMiddleware]})
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
