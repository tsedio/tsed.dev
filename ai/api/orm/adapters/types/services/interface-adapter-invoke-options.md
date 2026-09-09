---
title: AdapterInvokeOptions from @tsed/adapters
description: api documentation of AdapterInvokeOptions from @tsed/adapters
meta:
 - name: keywords
   description: api typescript node.js documentation AdapterInvokeOptions interface
---
# AdapterInvokeOptions - @tsed/adapters

## Usage

```typescript
import { AdapterInvokeOptions } from "@tsed/adapters";
```

> See [/packages/orm/adapters/src/services/Adapters.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters/src/services/Adapters.ts#L0-L0).

## Overview

```ts
interface AdapterInvokeOptions<Model = any> extends AdapterConstructorOptions<Model> {
    adapter?: Type<Adapter<Model>>;
}
```

<!-- Members -->

## adapter

```ts
adapter?: Type<Adapter<Model>>;
```
