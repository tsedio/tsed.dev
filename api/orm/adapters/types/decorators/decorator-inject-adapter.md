---
url: /api/orm/adapters/types/decorators/decorator-inject-adapter.md
description: api documentation of InjectAdapter from @tsed/adapters
---

## Usage

```typescript
import { InjectAdapter } from "@tsed/adapters";
```

> See [/packages/orm/adapters/src/decorators/injectAdapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters/src/decorators/injectAdapter.ts#L0-L0).

## Overview

```ts
function InjectAdapter(options: AdapterInvokeOptions): PropertyDecorator;
export function InjectAdapter(model: Type<any>, options?: Partial<Omit<AdapterInvokeOptions, "client">>): PropertyDecorator;
export function InjectAdapter(collectionName: string, model: Type<any>, options?: Partial<Omit<AdapterInvokeOptions, "collectionName" | "client">>): PropertyDecorator;
```

## Description

Inject the adapter in the property.
