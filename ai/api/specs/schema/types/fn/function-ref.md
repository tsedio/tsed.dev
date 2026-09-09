---
title: ref from @tsed/schema
description: api documentation of ref from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation ref function
---
# ref - @tsed/schema

## Usage

```typescript
import { ref } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/ref.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/ref.ts#L0-L0).

## Overview

```ts
function ref<T = unknown>(path: string): JsonSchema<T>;
```

-   **path** (`string`): - The reference URI

<!-- Description -->

## Description

Create a schema reference from an external or internal `$ref` URI.

### Example

```typescript
const UserRef = ref("https://api.example.com/doc/swagger.json#/components/schemas/User");
```
