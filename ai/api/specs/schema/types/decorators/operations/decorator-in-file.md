---
title: InFile from @tsed/schema
description: api documentation of InFile from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation InFile decorator
---
# InFile - @tsed/schema

## Usage

```typescript
import { InFile } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/inFile.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/inFile.ts#L0-L0).

## Overview

```ts
function InFile(name: string): ParameterDecorator;
```

<!-- Description -->

## Description

Add a input file parameter.

::: warning
Don't use decorator with Ts.ED application to decorate parameters. Use [BodyParams](/ai/api/platform/platform-params/types/decorators/decorator-body-params.md), [PathParams](/ai/api/platform/platform-params/types/decorators/decorator-path-params.md), etc... instead.
But you can use this decorator on Method, to add extra in parameters like Authorization header.

```typescript
@Controller("/")
class MyController {
   @Post("/")
   method(@InFile("file1") file: any) {
   }
 }
```

:::
