---
title: EventStreamInterceptor from @tsed/sse
description: api documentation of EventStreamInterceptor from @tsed/sse
meta:
 - name: keywords
   description: api typescript node.js documentation EventStreamInterceptor class
---
# EventStreamInterceptor - @tsed/sse

## Usage

```typescript
import { EventStreamInterceptor } from "@tsed/sse";
```

> See [/packages/third-parties/sse/src/interceptors/EventStreamInterceptor.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/sse/src/interceptors/EventStreamInterceptor.ts#L0-L0).

## Overview

```ts
class EventStreamInterceptor implements InterceptorMethods {
    protected $ctx: PlatformContext;
    intercept(context: InterceptorContext): Promise<unknown>;
}
```

<!-- Members -->

## protected $ctx

```ts
protected $ctx: PlatformContext;
```

## intercept

```ts
intercept(context: InterceptorContext): Promise<unknown>;
```
