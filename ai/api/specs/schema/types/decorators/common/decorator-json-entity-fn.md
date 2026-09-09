---
title: JsonEntityFn from @tsed/schema
description: api documentation of JsonEntityFn from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation JsonEntityFn decorator
---
# JsonEntityFn - @tsed/schema

## Usage

```typescript
import { JsonEntityFn } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/jsonEntityFn.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/jsonEntityFn.ts#L0-L0).

## Overview

```ts
function JsonEntityFn<T extends JsonEntityStore = JsonEntityStore>(fn: (entity: T, parameters: DecoratorParameters) => any): (...args: any[]) => any;
```

<!-- Description -->

## Description

Decorator util to compose another decorator. See [Description](/ai/api/specs/schema/types/decorators/common/decorator-description.md) decorator implementation for more details.

## Usage

```typescript
export function Description(description: any) {
  return JsonEntityFn((entity: JsonEntityStore, args: DecoratorParameters) => {
      entity.itemSchema.description(description)
  });
}
```
