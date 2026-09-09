---
url: /api/config/core/types/decorators/decorator-inject-config-source.md
description: api documentation of InjectConfigSource from @tsed/config
---

## Usage

```typescript
import { InjectConfigSource } from "@tsed/config/core/src/decorators/injectConfigSource";
```

> See [/packages/config/core/src/decorators/injectConfigSource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/config/core/src/decorators/injectConfigSource.ts#L0-L0).

## Overview

```ts
function InjectConfigSource(name: string): any;
```

* **name** (`string`): - The name of the configuration source to inject.

## Description

Injects a specific configuration source by its name.
