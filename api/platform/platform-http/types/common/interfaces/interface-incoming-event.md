---
url: >-
  /api/platform/platform-http/types/common/interfaces/interface-incoming-event.md
description: api documentation of IncomingEvent from @tsed/platform-http
---

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

## response

```ts
response: Res;
```

## request

```ts
request: Req;
```
