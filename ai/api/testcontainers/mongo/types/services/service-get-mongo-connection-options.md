---
title: getMongoConnectionOptions from @tsed/testcontainers-mongo
description: api documentation of getMongoConnectionOptions from @tsed/testcontainers-mongo
meta:
 - name: keywords
   description: api typescript node.js documentation getMongoConnectionOptions service
---
# getMongoConnectionOptions - @tsed/testcontainers-mongo

## Usage

```typescript
import { getMongoConnectionOptions } from "@tsed/testcontainers/mongo/src/services/ContainerUtils";
```

> See [/packages/testcontainers/mongo/src/services/ContainerUtils.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/testcontainers/mongo/src/services/ContainerUtils.ts#L0-L0).

## Overview

```ts
function getMongoConnectionOptions(id?: string, opts?: ConnectOptions): {
    id: string;
    url: string;
    connectionOptions: ConnectOptions;
};
```

<!-- Members -->

## id

```ts
id: string;
```

## url

```ts
url: string;
```

## connectionOptions

```ts
connectionOptions: ConnectOptions;
```
