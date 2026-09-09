---
title: MongooseConnectionOptions from @tsed/mongoose
description: api documentation of MongooseConnectionOptions from @tsed/mongoose
meta:
 - name: keywords
   description: api typescript node.js documentation MongooseConnectionOptions interface
---
# MongooseConnectionOptions - @tsed/mongoose

## Usage

```typescript
import { MongooseConnectionOptions } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/interfaces/MongooseConnectionOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/interfaces/MongooseConnectionOptions.ts#L0-L0).

## Overview

```ts
interface MongooseConnectionOptions {
    url: string;
    id: string;
    connectionOptions?: ConnectOptions;
}
```

<!-- Members -->

## url

```ts
url: string;
```

## id

```ts
id: string;
```

The connection ID

## connectionOptions

```ts
connectionOptions?: ConnectOptions;
```
