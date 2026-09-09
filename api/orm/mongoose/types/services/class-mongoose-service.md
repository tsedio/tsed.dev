---
url: /api/orm/mongoose/types/services/class-mongoose-service.md
description: api documentation of MongooseService from @tsed/mongoose
---

## Usage

```typescript
import { MongooseService } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/services/MongooseService.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/services/MongooseService.ts#L0-L0).

## Overview

```ts
class MongooseService {
    readonly connections: Map<string, Mongoose.Connection>;
    logger: Logger;
    connect(id: string, url: string, connectionOptions: ConnectOptions, isDefault?: boolean): Promise<any>;
    get(id?: string): Mongoose.Connection | undefined;
    has(id?: string): boolean;
    closeConnections(): Promise<void>;
}
```

## readonly connections

```ts
readonly connections: Map<string, Mongoose.Connection>;
```

## logger

```ts
logger: Logger;
```

## connect

```ts
connect(id: string, url: string, connectionOptions: ConnectOptions, isDefault?: boolean): Promise<any>;
```

## get

```ts
get(id?: string): Mongoose.Connection | undefined;
```

## has

```ts
has(id?: string): boolean;
```

## closeConnections

```ts
closeConnections(): Promise<void>;
```
