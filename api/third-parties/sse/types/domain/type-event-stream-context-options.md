---
url: /api/third-parties/sse/types/domain/type-event-stream-context-options.md
description: api documentation of EventStreamContextOptions from @tsed/sse
---

## Usage

```typescript
import { EventStreamContextOptions } from "@tsed/third-parties/sse/src/domain/EventStreamContext";
```

> See [/packages/third-parties/sse/src/domain/EventStreamContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/sse/src/domain/EventStreamContext.ts#L0-L0).

## Overview

```ts
type EventStreamContextOptions = {
    $ctx: PlatformContext;
} & EventStreamOpts;
```

## $ctx

```ts
$ctx: PlatformContext;
```
