---
title: MongoosePostHookCB from @tsed/mongoose
description: api documentation of MongoosePostHookCB from @tsed/mongoose
meta:
 - name: keywords
   description: api typescript node.js documentation MongoosePostHookCB type
---
# MongoosePostHookCB - @tsed/mongoose

## Usage

```typescript
import { MongoosePostHookCB } from "@tsed/orm/mongoose/src/interfaces/MongooseSchemaOptions";
```

> See [/packages/orm/mongoose/src/interfaces/MongooseSchemaOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/interfaces/MongooseSchemaOptions.ts#L0-L0).

## Overview

```ts
type MongoosePostHookCB<T = any> = (doc: T | MongooseDocument<T>, ...args: any[]) => Promise<void> | void;
```
