---
title: AdapterModel from @tsed/adapters
description: api documentation of AdapterModel from @tsed/adapters
meta:
 - name: keywords
   description: api typescript node.js documentation AdapterModel interface
---
# AdapterModel - @tsed/adapters

## Usage

```typescript
import { AdapterModel } from "@tsed/adapters";
```

> See [/packages/orm/adapters/src/adapters/LowDbAdapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters/src/adapters/LowDbAdapter.ts#L0-L0).

## Overview

```ts
interface AdapterModel {
    _id: string;
    expires_at?: Date;
    [key: string]: any;
}
```

<!-- Members -->

## \_id

```ts
_id: string;
```

## expires_at

```ts
expires_at?: Date;
```

## \[key: string]

```ts
[key: string]: any;
```
