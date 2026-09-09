---
title: InjectConfigSource from @tsed/config
description: api documentation of InjectConfigSource from @tsed/config
meta:
 - name: keywords
   description: api typescript node.js documentation InjectConfigSource decorator
---
# InjectConfigSource - @tsed/config

## Usage

```typescript
import { InjectConfigSource } from "@tsed/config/core/src/decorators/injectConfigSource";
```

> See [/packages/config/core/src/decorators/injectConfigSource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/config/core/src/decorators/injectConfigSource.ts#L0-L0).

## Overview

```ts
function InjectConfigSource(name: string): any;
```

-   **name** (`string`): - The name of the configuration source to inject.

<!-- Description -->

## Description

Injects a specific configuration source by its name.
