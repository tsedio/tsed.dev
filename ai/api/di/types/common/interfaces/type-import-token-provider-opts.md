---
title: ImportTokenProviderOpts from @tsed/di
description: api documentation of ImportTokenProviderOpts from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation ImportTokenProviderOpts type
---
# ImportTokenProviderOpts - @tsed/di

## Usage

```typescript
import { ImportTokenProviderOpts } from "@tsed/di/src/common/interfaces/ImportTokenProviderOpts";
```

> See [/packages/di/src/common/interfaces/ImportTokenProviderOpts.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/ImportTokenProviderOpts.ts#L0-L0).

## Overview

```ts
type ImportTokenProviderOpts = UseImportTokenProviderOpts | UseClassImportTokenProviderOpts | UseFactoryImportTokenProviderOpts | UseAsyncFactoryImportTokenProviderOpts;
```

<!-- Description -->

## Description

Union type representing all valid import provider configuration options.

Specifies how an imported provider should be created when listed in module imports or configuration.
Supports multiple creation strategies: predefined instances, class constructors, and factory functions.

### Usage

```typescript
import {Configuration} from "@tsed/di";

@Configuration({
  imports: [
    {token: MyService, useClass: MyServiceImpl},
    {token: "CONFIG", useFactory: () => loadConfig()},
    {token: DatabaseService, useAsyncFactory: async () => await connectDB()}
  ]
})
class Server {}
```
