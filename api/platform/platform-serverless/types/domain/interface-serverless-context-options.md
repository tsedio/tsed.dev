---
url: >-
  /api/platform/platform-serverless/types/domain/interface-serverless-context-options.md
description: api documentation of ServerlessContextOptions from @tsed/platform-serverless
---

## Usage

```typescript
import { ServerlessContextOptions } from "@tsed/platform-serverless";
```

> See [/packages/platform/platform-serverless/src/domain/ServerlessContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-serverless/src/domain/ServerlessContext.ts#L0-L0).

## Overview

```ts
interface ServerlessContextOptions<Event = APIGatewayProxyEvent> extends DIContextOptions {
    event: Event;
    context: Context;
    responseStream?: ServerlessResponseStream;
    endpoint: JsonEntityStore;
}
```

## event

```ts
event: Event;
```

## context

```ts
context: Context;
```

## responseStream

```ts
responseStream?: ServerlessResponseStream;
```

## endpoint

```ts
endpoint: JsonEntityStore;
```
