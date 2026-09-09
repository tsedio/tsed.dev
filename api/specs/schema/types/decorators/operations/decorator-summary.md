---
url: /api/specs/schema/types/decorators/operations/decorator-summary.md
description: api documentation of Summary from @tsed/schema
---

## Usage

```typescript
import { Summary } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/summary.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/summary.ts#L0-L0).

## Overview

```ts
function Summary(summary: string): MethodDecorator;
```

## Description

Add summary metadata on the decorated element.

## Examples

### On method

```typescript
class Model {
   @Summary("summary")
   id: string;
}
```
