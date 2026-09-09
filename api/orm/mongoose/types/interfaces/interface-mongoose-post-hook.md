---
url: /api/orm/mongoose/types/interfaces/interface-mongoose-post-hook.md
description: api documentation of MongoosePostHook from @tsed/mongoose
---

## Usage

```typescript
import { MongoosePostHook } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/interfaces/MongooseSchemaOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/interfaces/MongooseSchemaOptions.ts#L0-L0).

## Overview

```ts
interface MongoosePostHook<T = any> {
    method: MongooseMethods;
    fn: MongoosePostHookCB<T>;
    options?: MongooseHookOptions;
}
```

## method

```ts
method: MongooseMethods;
```

## fn

```ts
fn: MongoosePostHookCB<T>;
```

## options

```ts
options?: MongooseHookOptions;
```
