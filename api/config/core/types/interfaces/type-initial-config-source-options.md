---
url: /api/config/core/types/interfaces/type-initial-config-source-options.md
description: api documentation of InitialConfigSourceOptions from @tsed/config
---

## Usage

```typescript
import { InitialConfigSourceOptions } from "@tsed/config/core/src/interfaces/ConfigSource";
```

> See [/packages/config/core/src/interfaces/ConfigSource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/config/core/src/interfaces/ConfigSource.ts#L0-L0).

## Overview

```ts
type InitialConfigSourceOptions = Omit<ConfigSourceOptions, "options" | "use">;
```
