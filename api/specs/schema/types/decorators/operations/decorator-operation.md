---
url: /api/specs/schema/types/decorators/operations/decorator-operation.md
description: api documentation of Operation from @tsed/schema
---

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

## Description

Describe a new route with a method and path.

```typescript
@Controller('/')
export class Ctrl {

   @Route('GET', '/')
   get() { }
}

```
