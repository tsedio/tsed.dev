---
title: Produces from @tsed/schema
description: api documentation of Produces from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Produces decorator
---
# Produces - @tsed/schema

## Usage

```typescript
import { Produces } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/produces.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/produces.ts#L0-L0).

## Overview

```ts
function Produces(...produces: string[]): ClassDecorator & MethodDecorator;
```

<!-- Description -->

## Description

Add produces metadata on the decorated element.

## Examples

### On method

```typescript
class Model {
   @Produces("text/html")
   id: string;
}
```

::: warning
For openspec v3 prefer `@Returns().ContentType()` usage (see [Returns](/ai/api/specs/schema/types/decorators/operations/decorator-returns.md)).
:::
