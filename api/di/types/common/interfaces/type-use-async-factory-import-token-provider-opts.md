---
url: >-
  /api/di/types/common/interfaces/type-use-async-factory-import-token-provider-opts.md
description: api documentation of UseAsyncFactoryImportTokenProviderOpts from @tsed/di
---

## Usage

```typescript
import { UseAsyncFactoryImportTokenProviderOpts } from "@tsed/di/src/common/interfaces/ImportTokenProviderOpts";
```

> See [/packages/di/src/common/interfaces/ImportTokenProviderOpts.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/ImportTokenProviderOpts.ts#L0-L0).

## Overview

```ts
type UseAsyncFactoryImportTokenProviderOpts = {
    token: TokenProvider;
    useAsyncFactory: (...args: unknown[]) => Promise<unknown>;
};
```

## Description

Options for importing a provider using an asynchronous factory function.

## token

```ts
token: TokenProvider;
```

## useAsyncFactory:

```ts
useAsyncFactory: (...args: unknown[]) => Promise<unknown>;
```
