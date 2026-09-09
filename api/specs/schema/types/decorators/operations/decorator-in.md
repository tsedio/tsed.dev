---
url: /api/specs/schema/types/decorators/operations/decorator-in.md
description: api documentation of In from @tsed/schema
---

## Usage

```typescript
import { In } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/in.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/in.ts#L0-L0).

## Overview

```ts
function In(inType: JsonParameterTypes | string): InChainedDecorators;
```

## Description

Add a input parameter.

::: warning
Don't use decorator with Ts.ED application to decorate parameters. Use @@BodyParams@@, @@PathParams@@, etc... instead.
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
