---
url: /api/specs/schema/types/domain/interface-ignore-callback.md
description: api documentation of IgnoreCallback from @tsed/schema
---

## Usage

```typescript
import { IgnoreCallback } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/IgnoreCallback.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/IgnoreCallback.ts#L0-L0).

## Overview

```ts
interface IgnoreCallback {
    (value: boolean, ctx: JsonHookContext): boolean;
}
```

## Description

Callback function to determine whether a property should be ignored during serialization.

This callback is invoked during schema generation to conditionally ignore properties
based on the current context and the default ignore value.

### Usage

```typescript
const ignoreCallback: IgnoreCallback = (value, ctx) => {
  // Ignore properties when specific groups are active
  if (ctx.groups?.includes('admin')) {
    return false; // Don't ignore for admin group
  }
  return value; // Use default ignore value
};
```

##

```ts
(value: boolean, ctx: JsonHookContext): boolean;
```
