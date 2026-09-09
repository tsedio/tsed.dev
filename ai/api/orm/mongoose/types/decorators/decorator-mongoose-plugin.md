---
title: MongoosePlugin from @tsed/mongoose
description: api documentation of MongoosePlugin from @tsed/mongoose
meta:
 - name: keywords
   description: api typescript node.js documentation MongoosePlugin decorator
---
# MongoosePlugin - @tsed/mongoose

## Usage

```typescript
import { MongoosePlugin } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/mongoosePlugin.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/mongoosePlugin.ts#L0-L0).

## Overview

```ts
function MongoosePlugin(plugin: (schema: mongoose.Schema, options?: any) => void, options?: any): Function;
```
