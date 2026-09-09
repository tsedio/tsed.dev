---
url: /api/di/types/common/interfaces/type-use-import-token-provider-opts.md
description: api documentation of UseImportTokenProviderOpts from @tsed/di
---

## Usage

```typescript
import { UseImportTokenProviderOpts } from "@tsed/di/src/common/interfaces/ImportTokenProviderOpts";
```

> See [/packages/di/src/common/interfaces/ImportTokenProviderOpts.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/ImportTokenProviderOpts.ts#L0-L0).

## Overview

```ts
type UseImportTokenProviderOpts = {
    token: TokenProvider;
    use: unknown;
};
```

## Description

Options for importing a provider with a predefined instance.

## token

```ts
token: TokenProvider;
```

## use

```ts
use: unknown;
```
