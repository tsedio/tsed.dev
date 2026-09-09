---
url: /api/orm/mongoose/types/interfaces/type-mongoose-hook-promised.md
description: api documentation of MongooseHookPromised from @tsed/mongoose
---

## Usage

```typescript
import { MongooseHookPromised } from "@tsed/orm/mongoose/src/interfaces/MongooseSchemaOptions";
```

> See [/packages/orm/mongoose/src/interfaces/MongooseSchemaOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/interfaces/MongooseSchemaOptions.ts#L0-L0).

## Overview

```ts
type MongooseHookPromised<T = any> = (doc: T | MongooseDocument<T>) => Promise<void>;
```
