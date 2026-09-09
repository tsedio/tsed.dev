---
title: InitialConfigSourceOptions from @tsed/config
description: api documentation of InitialConfigSourceOptions from @tsed/config
meta:
 - name: keywords
   description: api typescript node.js documentation InitialConfigSourceOptions type
---
# InitialConfigSourceOptions - @tsed/config

## Usage

```typescript
import { InitialConfigSourceOptions } from "@tsed/config/core/src/interfaces/ConfigSource";
```

> See [/packages/config/core/src/interfaces/ConfigSource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/config/core/src/interfaces/ConfigSource.ts#L0-L0).

## Overview

```ts
type InitialConfigSourceOptions = Omit<ConfigSourceOptions, "options" | "use">;
```
