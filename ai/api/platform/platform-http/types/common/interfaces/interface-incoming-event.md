---
title: IncomingEvent from @tsed/platform-http
description: api documentation of IncomingEvent from @tsed/platform-http
meta:
 - name: keywords
   description: api typescript node.js documentation IncomingEvent interface
---
# IncomingEvent - @tsed/platform-http

## Usage

```typescript
import { IncomingEvent } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/interfaces/IncomingEvent.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/interfaces/IncomingEvent.ts#L0-L0).

## Overview

```ts
interface IncomingEvent<Req = IncomingMessage, Res = ServerResponse> extends Record<string, unknown> {
    response: Res;
    request: Req;
}
```

<!-- Members -->

## response

```ts
response: Res;
```

## request

```ts
request: Req;
```
