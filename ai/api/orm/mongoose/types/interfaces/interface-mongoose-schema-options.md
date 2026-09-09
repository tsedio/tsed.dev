---
title: MongooseSchemaOptions from @tsed/mongoose
description: api documentation of MongooseSchemaOptions from @tsed/mongoose
meta:
 - name: keywords
   description: api typescript node.js documentation MongooseSchemaOptions interface
---
# MongooseSchemaOptions - @tsed/mongoose

## Usage

```typescript
import { MongooseSchemaOptions } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/interfaces/MongooseSchemaOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/interfaces/MongooseSchemaOptions.ts#L0-L0).

## Overview

```ts
interface MongooseSchemaOptions {
    schemaOptions?: SchemaOptions;
    plugins?: MongoosePluginOptions[];
    indexes?: MongooseIndexOptions[];
    pre?: MongoosePreHook[];
    post?: MongoosePostHook[];
}
```

<!-- Members -->

## schemaOptions

```ts
schemaOptions?: SchemaOptions;
```

## plugins

```ts
plugins?: MongoosePluginOptions[];
```

## indexes

```ts
indexes?: MongooseIndexOptions[];
```

## pre

```ts
pre?: MongoosePreHook[];
```

## post

```ts
post?: MongoosePostHook[];
```
