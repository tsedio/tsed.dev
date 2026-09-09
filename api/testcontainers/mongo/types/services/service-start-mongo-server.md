---
url: /api/testcontainers/mongo/types/services/service-start-mongo-server.md
description: api documentation of startMongoServer from @tsed/testcontainers-mongo
---

## Usage

```typescript
import { startMongoServer } from "@tsed/testcontainers/mongo/src/services/ContainerUtils";
```

> See [/packages/testcontainers/mongo/src/services/ContainerUtils.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/testcontainers/mongo/src/services/ContainerUtils.ts#L0-L0).

## Overview

```ts
function startMongoServer(image?: string): Promise<{
    container: StartedMongoDBContainer;
    url: string;
}>;
```

## container

```ts
container: StartedMongoDBContainer;
```

## url

```ts
url: string;
```
