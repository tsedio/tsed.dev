---
title: FactoryTokenProvider from @tsed/di
description: api documentation of FactoryTokenProvider from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation FactoryTokenProvider type
---
# FactoryTokenProvider - @tsed/di

## Usage

```typescript
import { FactoryTokenProvider } from "@tsed/di/src/common/interfaces/TokenProvider";
```

> See [/packages/di/src/common/interfaces/TokenProvider.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/TokenProvider.ts#L0-L0).

## Overview

```ts
type FactoryTokenProvider<T = any> = T & {
    readonly __type: "token_factory";
};
```

<!-- Description -->

## Description

Factory token type with type inference support.

A branded type that enables type inference when using the `inject()` function.
This token type carries runtime type information to solve TypeScript's inference limitations in DI scenarios.

<!-- Members -->

## readonly \__type

```ts
readonly __type: "token_factory";
```
