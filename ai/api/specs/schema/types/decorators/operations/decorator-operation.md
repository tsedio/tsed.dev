---
title: Operation from @tsed/schema
description: api documentation of Operation from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Operation decorator
---
# Operation - @tsed/schema

## Usage

```typescript
import { Operation } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/operation.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/operation.ts#L0-L0).

## Overview

```ts
function Operation(method: string, path: string, ...args: any[]): RouteChainedDecorators;
export function Operation(...args: any[]): RouteChainedDecorators;
```

<!-- Description -->

## Description

Describe a new route with a method and path.

```typescript
@Controller('/')
export class Ctrl {

   @Route('GET', '/')
   get() { }
}

```
