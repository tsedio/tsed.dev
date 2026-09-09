---
url: >-
  /api/platform/platform-http/types/common/domain/class-any-to-promise-with-ctx.md
description: api documentation of AnyToPromiseWithCtx from @tsed/platform-http
---

## Usage

```typescript
import { AnyToPromiseWithCtx } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/domain/AnyToPromiseWithCtx.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/domain/AnyToPromiseWithCtx.ts#L0-L0).

## Overview

```ts
class AnyToPromiseWithCtx extends AnyToPromise {
    $ctx: PlatformContext;
    constructor($ctx: PlatformContext);
    isDone(): boolean;
    call(cb: Function): Promise<AnyPromiseResult<any>>;
    destroy(): void;
    isCanceledResponse(process: any): boolean;
}
```

## $ctx

```ts
$ctx: PlatformContext;
```

## isDone

```ts
isDone(): boolean;
```

## call

```ts
call(cb: Function): Promise<AnyPromiseResult<any>>;
```

## destroy

```ts
destroy(): void;
```

## isCanceledResponse

```ts
isCanceledResponse(process: any): boolean;
```
