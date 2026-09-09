---
title: registerProvider from @tsed/di
description: api documentation of registerProvider from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation registerProvider function
---
# registerProvider - @tsed/di

## Usage

```typescript
import { registerProvider } from "@tsed/di";
```

> See [/packages/di/src/common/fn/injectable.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/fn/injectable.ts#L0-L0).

## Overview

```ts
function registerProvider<Type = any>({ token, provide, ...opts }: Opts<Type>): import("../index.js").Provider<any>;
```

<!-- Description -->

## Description

Register a provider configuration.
