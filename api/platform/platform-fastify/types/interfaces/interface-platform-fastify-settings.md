---
url: >-
  /api/platform/platform-fastify/types/interfaces/interface-platform-fastify-settings.md
description: api documentation of PlatformFastifySettings from @tsed/platform-fastify
---

## Usage

```typescript
import { PlatformFastifySettings } from "@tsed/platform-fastify";
```

> See [/packages/platform/platform-fastify/src/interfaces/PlatformFastifySettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-fastify/src/interfaces/PlatformFastifySettings.ts#L0-L0).

## Overview

```ts
interface PlatformFastifySettings extends FastifyHttpOptions<any, any> {
    app?: FastifyInstance;
}
```

## app

```ts
app?: FastifyInstance;
```
