---
url: /api/specs/schema/types/domain/interface-json-hook-context.md
description: api documentation of JsonHookContext from @tsed/schema
---

## Usage

```typescript
import { JsonHookContext } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonHookContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonHookContext.ts#L0-L0).

## Overview

```ts
interface JsonHookContext extends TsED.JsonHookContext {
    self: any;
    groups?: string[] | false;
    [key: string]: any;
}
```

## Description

Context object passed to JSON schema hooks during serialization and schema generation.

This context provides information about the current serialization state, including
the target instance, active groups, and extensible custom properties. It enables
hooks to make context-aware decisions during schema generation and transformation.

The interface is extensible via TypeScript module augmentation, allowing packages
to add custom context properties through the `TsED.JsonHookContext` namespace.

### Usage

```typescript
import {JsonHookContext} from "@tsed/schema";

function myHook(value: any, ctx: JsonHookContext) {
  // Access the target instance
  console.log(ctx.self);

  // Check active groups
  if (ctx.groups?.includes('admin')) {
    // Apply admin-specific transformations
  }
}
```

## self

```ts
self: any;
```

The current instance used by serializer function

## groups

```ts
groups?: string[] | false;
```

Active groups for conditional schema generation.

When set to an array, only properties belonging to these groups will be included.
When set to `false`, group filtering is disabled.

## \[key: string]

```ts
[key: string]: any;
```
