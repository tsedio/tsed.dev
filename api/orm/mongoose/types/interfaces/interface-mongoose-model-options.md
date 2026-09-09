---
url: /api/orm/mongoose/types/interfaces/interface-mongoose-model-options.md
description: api documentation of MongooseModelOptions from @tsed/mongoose
---

## Usage

```typescript
import { MongooseModelOptions } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/interfaces/MongooseModelOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/interfaces/MongooseModelOptions.ts#L0-L0).

## Overview

```ts
interface MongooseModelOptions extends MongooseSchemaOptions {
    name?: string;
    connection?: string;
    collection?: string;
    overwriteModels?: boolean;
}
```

## name

```ts
name?: string;
```

## connection

```ts
connection?: string;
```

## collection

```ts
collection?: string;
```

## overwriteModels

```ts
overwriteModels?: boolean;
```
