---
title: TemplateRenderError from @tsed/platform-response-filter
description: api documentation of TemplateRenderError from @tsed/platform-response-filter
meta:
 - name: keywords
   description: api typescript node.js documentation TemplateRenderError class
---
# TemplateRenderError - @tsed/platform-response-filter

## Usage

```typescript
import { TemplateRenderError } from "@tsed/platform-response-filter";
```

> See [/packages/platform/platform-response-filter/src/errors/TemplateRenderError.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-response-filter/src/errors/TemplateRenderError.ts#L0-L0).

## Overview

```ts
class TemplateRenderError extends InternalServerError {
    name: string;
    constructor(target: Type<any> | string, method: string | symbol, err: Error);
    static buildMessage(target: Type<any> | string, method: string | symbol, err: Error): string;
}
```

<!-- Members -->

## name

```ts
name: string;
```

## static buildMessage

```ts
static buildMessage(target: Type<any> | string, method: string | symbol, err: Error): string;
```
