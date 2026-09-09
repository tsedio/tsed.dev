---
url: /api/core/types/utils/function-is-buffer.md
description: api documentation of isBuffer from @tsed/core
---

## Usage

```typescript
import { isBuffer } from "@tsed/core";
```

> See [/packages/core/src/utils/isBuffer.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isBuffer.ts#L0-L0).

## Overview

```ts
function isBuffer(target: any): target is Buffer;
```

## Description

Checks if a value is a Buffer or Uint8Array instance.
