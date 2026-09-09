---
url: /api/core/types/utils/function-is-serializable.md
description: api documentation of isSerializable from @tsed/core
---

## Usage

```typescript
import { isSerializable } from "@tsed/core";
```

> See [/packages/core/src/utils/isSerializable.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isSerializable.ts#L0-L0).

## Overview

```ts
function isSerializable(data: any): boolean;
```

## Description

Checks if data requires serialization by excluding buffers, streams, and primitive types.
