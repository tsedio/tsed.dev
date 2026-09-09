---
title: MongooseVirtualRefOptions from @tsed/mongoose
description: api documentation of MongooseVirtualRefOptions from @tsed/mongoose
meta:
 - name: keywords
   description: api typescript node.js documentation MongooseVirtualRefOptions interface
---
# MongooseVirtualRefOptions - @tsed/mongoose

## Usage

```typescript
import { MongooseVirtualRefOptions } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/interfaces/MongooseVirtualRefOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/interfaces/MongooseVirtualRefOptions.ts#L0-L0).

## Overview

```ts
interface MongooseVirtualRefOptions {
    ref?: string | Type<any> | (() => Type<any>);
    foreignField?: string;
    localField?: string;
    justOne?: boolean;
    count?: boolean;
    options?: object;
}
```

<!-- Members -->

## ref: string | Type

```ts
ref?: string | Type<any> | (() => Type<any>);
```

## foreignField

```ts
foreignField?: string;
```

## localField

```ts
localField?: string;
```

## justOne

```ts
justOne?: boolean;
```

## count

```ts
count?: boolean;
```

## options

```ts
options?: object;
```
