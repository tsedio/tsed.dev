---
url: >-
  /api/platform/platform-response-filter/types/interfaces/interface-response-filter-methods.md
description: api documentation of ResponseFilterMethods from @tsed/platform-response-filter
---

## Usage

```typescript
import { ResponseFilterMethods } from "@tsed/platform-response-filter";
```

> See [/packages/platform/platform-response-filter/src/interfaces/ResponseFilterMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-response-filter/src/interfaces/ResponseFilterMethods.ts#L0-L0).

## Overview

```ts
interface ResponseFilterMethods<T = unknown> {
    transform(data: T, ctx: BaseContext): any;
}
```

## Description

A list of response filters must be called before returning a response to the consumer. See more on [Response filters](/docs/response-filter.md).

## transform

```ts
transform(data: T, ctx: BaseContext): any;
```
