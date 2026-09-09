---
title: MongoosePreHook from @tsed/mongoose
description: api documentation of MongoosePreHook from @tsed/mongoose
meta:
 - name: keywords
   description: api typescript node.js documentation MongoosePreHook interface
---
# MongoosePreHook - @tsed/mongoose

## Usage

```typescript
import { MongoosePreHook } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/interfaces/MongooseSchemaOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/interfaces/MongooseSchemaOptions.ts#L0-L0).

## Overview

```ts
interface MongoosePreHook<T = any> {
    method: MongooseMethods;
    fn: MongoosePreHookCB<T>;
    options?: MongooseHookOptions;
}
```

<!-- Members -->

## method

```ts
method: MongooseMethods;
```

## fn

```ts
fn: MongoosePreHookCB<T>;
```

## options

```ts
options?: MongooseHookOptions;
```
