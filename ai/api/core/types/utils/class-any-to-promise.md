---
title: AnyToPromise from @tsed/core
description: api documentation of AnyToPromise from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation AnyToPromise class
---
# AnyToPromise - @tsed/core

## Usage

```typescript
import { AnyToPromise } from "@tsed/core";
```

> See [/packages/core/src/utils/AnyToPromise.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/AnyToPromise.ts#L0-L0).

## Overview

```ts
class AnyToPromise<T = any> {
    status: AnyToPromiseStatus;
    constructor({ hasNextFunction }?: {
        hasNextFunction?: boolean;
    });
    get next(): (error?: any) => void;
    isDone(): boolean;
    call(cb: Function): Promise<AnyPromiseResult<T>>;
    reject(er: any): void;
    resolve(response?: any): void;
    destroy(): void;
    cancel(): any;
    done(status: AnyToPromiseStatus): void;
    handle(process: any, additionalProps?: {}): any;
    protected isCanceledResponse(process: any): boolean;
}
```

<!-- Description -->

## Description

Utility that normalizes various async-like values (Promise, Observable, Stream, plain value)
into a single Promise-based flow with a consistent result shape.

This class is used internally to handle controller/middleware outputs, but can be
reused anywhere a unified async handling is desired.

<!-- Members -->

## status

```ts
status: AnyToPromiseStatus;
```

## get next

```ts
get next(): (error?: any) => void;
```

## isDone

```ts
isDone(): boolean;
```

## call

```ts
call(cb: Function): Promise<AnyPromiseResult<T>>;
```

## reject

```ts
reject(er: any): void;
```

## resolve

```ts
resolve(response?: any): void;
```

## destroy

```ts
destroy(): void;
```

## cancel

```ts
cancel(): any;
```

## done

```ts
done(status: AnyToPromiseStatus): void;
```

## handle

```ts
handle(process: any, additionalProps?: {}): any;
```

## protected isCanceledResponse

```ts
protected isCanceledResponse(process: any): boolean;
```
