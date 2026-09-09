---
url: /api/specs/schema/types/fn/function-ref.md
description: api documentation of ref from @tsed/schema
---

## Usage

```typescript
import { ref } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/ref.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/ref.ts#L0-L0).

## Overview

```ts
function ref<T = unknown>(path: string): JsonSchema<T>;
```

* **path** (`string`): - The reference URI

## Description

Create a schema reference from an external or internal `$ref` URI.

### Example

```typescript
const UserRef = ref("https://api.example.com/doc/swagger.json#/components/schemas/User");
```
