---
title: adapter from @tsed/adapters
description: api documentation of adapter from @tsed/adapters
meta:
 - name: keywords
   description: api typescript node.js documentation adapter decorator
---
# adapter - @tsed/adapters

## Usage

```typescript
import { adapter } from "@tsed/adapters";
```

> See [/packages/orm/adapters/src/decorators/injectAdapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters/src/decorators/injectAdapter.ts#L0-L0).

## Overview

```ts
function adapter<Model>(options: AdapterInvokeOptions<Model>): Adapter<Model>;
export function adapter<Model>(model: Type<Model>, options?: Partial<Omit<AdapterInvokeOptions, "client">>): Adapter<Model>;
export function adapter<Model>(collectionName: string, model: Type<Model>, options?: Partial<Omit<AdapterInvokeOptions, "collectionName" | "client">>): Adapter<Model>;
```
