---
url: /api/specs/schema/types/decorators/operations/decorator-produces.md
description: api documentation of Produces from @tsed/schema
---

## Usage

```typescript
import { Produces } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/produces.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/produces.ts#L0-L0).

## Overview

```ts
function Produces(...produces: string[]): ClassDecorator & MethodDecorator;
```

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
For openspec v3 prefer `@Returns().ContentType()` usage (see @@Returns@@).
:::
