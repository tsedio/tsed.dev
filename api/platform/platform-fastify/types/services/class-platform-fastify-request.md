---
url: >-
  /api/platform/platform-fastify/types/services/class-platform-fastify-request.md
description: api documentation of PlatformFastifyRequest from @tsed/platform-fastify
---

## Usage

```typescript
import { PlatformFastifyRequest } from "@tsed/platform-fastify";
```

> See [/packages/platform/platform-fastify/src/services/PlatformFastifyRequest.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-fastify/src/services/PlatformFastifyRequest.ts#L0-L0).

## Overview

```ts
class PlatformFastifyRequest extends PlatformRequest<FastifyRequest> {
    get host(): string;
    get secure(): boolean;
    get(name: string): string | string[] | undefined;
    getReq(): IncomingMessage;
    accepts(mime?: string | string[]): any;
}
```

## get host

```ts
get host(): string;
```

## get secure

```ts
get secure(): boolean;
```

## get

```ts
get(name: string): string | string[] | undefined;
```

Returns the HTTP request header specified by field. The match is case-insensitive.

```typescript
request.get('Content-Type') // => "text/plain"
```

## getReq

```ts
getReq(): IncomingMessage;
```

## accepts

```ts
accepts(mime?: string | string[]): any;
```
