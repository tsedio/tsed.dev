---
title: In from @tsed/schema
description: api documentation of In from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation In decorator
---
# In - @tsed/schema

## Usage

```typescript
import { In } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/in.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/in.ts#L0-L0).

## Overview

```ts
function In(inType: JsonParameterTypes | string): InChainedDecorators;
```

<!-- Description -->

## Description

Add a input parameter.

::: warning
Don't use decorator with Ts.ED application to decorate parameters. Use [BodyParams](/ai/api/platform/platform-params/types/decorators/decorator-body-params.md), [PathParams](/ai/api/platform/platform-params/types/decorators/decorator-path-params.md), etc... instead.
But you can use this decorator on Method, to add extra in parameters like Authorization header.

```typescript
@Controller("/")
class MyController {
   @Get("/")
   @In("header").Type(String).Name("Authorization").Required()
   method() {
   }
 }
```

:::
