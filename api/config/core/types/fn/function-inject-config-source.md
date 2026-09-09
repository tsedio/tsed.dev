---
url: /api/config/core/types/fn/function-inject-config-source.md
description: api documentation of injectConfigSource from @tsed/config
---

## Usage

```typescript
import { injectConfigSource } from "@tsed/config/core/src/fn/injectConfigSource";
```

> See [/packages/config/core/src/fn/injectConfigSource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/config/core/src/fn/injectConfigSource.ts#L0-L0).

## Overview

```ts
function injectConfigSource<T extends ConfigSource = ConfigSource>(name: string, opts?: Partial<Pick<InvokeOptions, "useOpts" | "rebuild" | "locals">>): T;
```

* **name** (`string`): - The name of the configuration source to retrieve.

* **\[opts]** (`tring`): -  invocation options to customize the behavior of the injection.

## Description

Injects a configuration source by name and returns it as the specified type.
