---
title: UseClassImportTokenProviderOpts from @tsed/di
description: api documentation of UseClassImportTokenProviderOpts from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation UseClassImportTokenProviderOpts type
---
# UseClassImportTokenProviderOpts - @tsed/di

## Usage

```typescript
import { UseClassImportTokenProviderOpts } from "@tsed/di/src/common/interfaces/ImportTokenProviderOpts";
```

> See [/packages/di/src/common/interfaces/ImportTokenProviderOpts.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/ImportTokenProviderOpts.ts#L0-L0).

## Overview

```ts
type UseClassImportTokenProviderOpts = {
    token: TokenProvider;
    useClass: Type | AbstractType<any>;
};
```

<!-- Description -->

## Description

Options for importing a provider using a class constructor.

<!-- Members -->

## token

```ts
token: TokenProvider;
```

## useClass

```ts
useClass: Type | AbstractType<any>;
```
