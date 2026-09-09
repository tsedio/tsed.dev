---
url: /api/di/types/common/fn/function-register-provider.md
description: api documentation of registerProvider from @tsed/di
---

## Usage

```typescript
import { registerProvider } from "@tsed/di";
```

> See [/packages/di/src/common/fn/injectable.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/fn/injectable.ts#L0-L0).

## Overview

```ts
function registerProvider<Type = any>({ token, provide, ...opts }: Opts<Type>): import("../index.js").Provider<any>;
```

## Description

Register a provider configuration.
