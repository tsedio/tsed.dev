---
title: UseFactoryImportTokenProviderOpts from @tsed/di
description: api documentation of UseFactoryImportTokenProviderOpts from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation UseFactoryImportTokenProviderOpts type
---
# UseFactoryImportTokenProviderOpts - @tsed/di

## Usage

```typescript
import { UseFactoryImportTokenProviderOpts } from "@tsed/di/src/common/interfaces/ImportTokenProviderOpts";
```

> See [/packages/di/src/common/interfaces/ImportTokenProviderOpts.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/ImportTokenProviderOpts.ts#L0-L0).

## Overview

```ts
type UseFactoryImportTokenProviderOpts = {
    token: TokenProvider;
    useFactory: (...args: unknown[]) => unknown;
};
```

<!-- Description -->

## Description

Options for importing a provider using a synchronous factory function.

<!-- Members -->

## token

```ts
token: TokenProvider;
```

## useFactory:

```ts
useFactory: (...args: unknown[]) => unknown;
```
