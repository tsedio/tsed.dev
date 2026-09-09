---
url: /api/di/types/common/interfaces/type-token-provider.md
description: api documentation of TokenProvider from @tsed/di
---

## Usage

```typescript
import { TokenProvider } from "@tsed/di/src/common/interfaces/TokenProvider";
```

> See [/packages/di/src/common/interfaces/TokenProvider.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/TokenProvider.ts#L0-L0).

## Overview

```ts
type TokenProvider<T = any> = string | symbol | Type<T> | AbstractType<T> | FactoryTokenProvider<T>;
```

## Description

Union type representing all valid provider tokens in the DI system.

A token uniquely identifies a provider in the dependency injection container.
Tokens can be strings, symbols, class constructors, or factory tokens with type inference.

### Usage

```typescript
// String token
const token1: TokenProvider = "MY_SERVICE";

// Symbol token
const token2: TokenProvider = Symbol.for("MY_SERVICE");

// Class token
const token3: TokenProvider = MyService;

// Factory token with inference
const token4 = inject<MyService>();
```
