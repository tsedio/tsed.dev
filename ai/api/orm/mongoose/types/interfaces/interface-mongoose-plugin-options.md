---
title: MongoosePluginOptions from @tsed/mongoose
description: api documentation of MongoosePluginOptions from @tsed/mongoose
meta:
 - name: keywords
   description: api typescript node.js documentation MongoosePluginOptions interface
---
# MongoosePluginOptions - @tsed/mongoose

## Usage

```typescript
import { MongoosePluginOptions } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/interfaces/MongooseSchemaOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/interfaces/MongooseSchemaOptions.ts#L0-L0).

## Overview

```ts
interface MongoosePluginOptions {
    plugin: (schema: Schema, options?: any) => void;
    options?: Record<string, unknown>;
}
```

<!-- Members -->

## plugin:

```ts
plugin: (schema: Schema, options?: any) => void;
```

## options

```ts
options?: Record<string, unknown>;
```
