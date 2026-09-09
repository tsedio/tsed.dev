---
url: /api/core/types/utils/function-set-value.md
description: api documentation of setValue from @tsed/core
---

## Usage

```typescript
import { setValue } from "@tsed/core";
```

> See [/packages/core/src/utils/setValue.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/setValue.ts#L0-L0).

## Overview

```ts
function setValue(scope: any, expression: string, value: any, separator?: string): void;
```

* **scope** (`any`): - The target object or Map to set the value on

* **expression** (`string`): - Dot-notation path to the property (e.g., "user.profile.name")

* **value** (`any`): - The value to set at the specified path

* **separator** (`string`): Optional. - Path separator character (default: ".")

## Description

Sets a value on an object using a dot-notation expression path.

Supports both plain objects and Map-like objects (with `.set()`, `.get()`, `.has()` methods).
Automatically creates intermediate objects as needed. Protected keys (`__proto__`, `constructor`, `prototype`) are ignored for security.

```typescript
const obj = {};
setValue(obj, "user.name", "John");
// obj is now { user: { name: "John" } }
```
