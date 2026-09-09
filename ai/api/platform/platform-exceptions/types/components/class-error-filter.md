---
title: ErrorFilter from @tsed/platform-exceptions
description: api documentation of ErrorFilter from @tsed/platform-exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation ErrorFilter class
---
# ErrorFilter - @tsed/platform-exceptions

## Usage

```typescript
import { ErrorFilter } from "@tsed/platform-exceptions";
```

> See [/packages/platform/platform-exceptions/src/components/ErrorFilter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-exceptions/src/components/ErrorFilter.ts#L0-L0).

## Overview

```ts
class ErrorFilter implements ExceptionFilterMethods {
    catch(error: any, ctx: BaseContext): void;
    mapError(error: any, env?: Env): {
        name: any;
        message: any;
        status: any;
        errors: any;
        stack: any;
    };
    protected getErrors(error: any): any;
    protected getHeaders(error: any): any;
}
```

<!-- Members -->

## catch

```ts
catch(error: any, ctx: BaseContext): void;
```

## mapError

```ts
mapError(error: any, env?: Env): {
     name: any;
     message: any;
     status: any;
     errors: any;
     stack: any;
 };
```

## protected getErrors

```ts
protected getErrors(error: any): any;
```

## protected getHeaders

```ts
protected getHeaders(error: any): any;
```
