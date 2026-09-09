---
url: /api/di/types/common/interfaces/type-use-factory-import-token-provider-opts.md
description: api documentation of UseFactoryImportTokenProviderOpts from @tsed/di
---

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

## Description

Options for importing a provider using a synchronous factory function.

## token

```ts
token: TokenProvider;
```

## useFactory:

```ts
useFactory: (...args: unknown[]) => unknown;
```
