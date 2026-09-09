---
title: ExceptionFilterMethods from @tsed/platform-exceptions
description: api documentation of ExceptionFilterMethods from @tsed/platform-exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation ExceptionFilterMethods interface
---
# ExceptionFilterMethods - @tsed/platform-exceptions

## Usage

```typescript
import { ExceptionFilterMethods } from "@tsed/platform-exceptions";
```

> See [/packages/platform/platform-exceptions/src/interfaces/ExceptionFilterMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-exceptions/src/interfaces/ExceptionFilterMethods.ts#L0-L0).

## Overview

```ts
interface ExceptionFilterMethods<T = unknown> {
    catch(error: T, ctx: DIContext): void;
}
```

<!-- Members -->

## catch

```ts
catch(error: T, ctx: DIContext): void;
```
