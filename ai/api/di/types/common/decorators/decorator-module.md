---
title: Module from @tsed/di
description: api documentation of Module from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation Module decorator
---
# Module - @tsed/di

## Usage

```typescript
import { Module } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/module.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/module.ts#L0-L0).

## Overview

```ts
function Module(options?: Partial<ModuleOptions>): any;
```

-   **options** (`Partial<ModuleOptions>`): Optional. Module configuration options

<!-- Description -->

## Description

Declare a Ts.ED module to organize related providers and configuration.

Modules group related functionality together, manage provider dependencies,
and configure application settings. They are singleton-scoped by default.

### Usage

```typescript
import {Module} from "@tsed/di";

@Module({
  imports: [DatabaseService, CacheService],
  mount: {
    "/api": [UserController, ProductController]
  }
})
export class AppModule {
  constructor(private db: DatabaseService) {
    // Dependencies injected
  }

  $onInit() {
    this.db.connect();
  }
}
```

### Options

-   `imports`: Providers to initialize before this module
-   `deps`: Constructor dependencies (explicit declaration)
-   `mount`: Route mappings for controllers
-   `scope`: Provider scope (default: singleton)
-   Additional properties are stored as module configuration
