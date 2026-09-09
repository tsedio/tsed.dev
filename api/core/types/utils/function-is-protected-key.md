---
url: /api/core/types/utils/function-is-protected-key.md
description: api documentation of isProtectedKey from @tsed/core
---

## Usage

```typescript
import { isProtectedKey } from "@tsed/core";
```

> See [/packages/core/src/utils/isProtectedKey.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isProtectedKey.ts#L0-L0).

## Overview

```ts
function isProtectedKey(key: string): boolean;
```

## Description

Checks if a key is a protected property name to prevent prototype pollution vulnerabilities.
