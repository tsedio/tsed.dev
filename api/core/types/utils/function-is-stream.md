---
url: /api/core/types/utils/function-is-stream.md
description: api documentation of isStream from @tsed/core
---

## Usage

```typescript
import { isStream } from "@tsed/core";
```

> See [/packages/core/src/utils/isStream.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isStream.ts#L0-L0).

## Overview

```ts
function isStream(obj: any): boolean;
```

## Description

Checks if an object is a Node.js stream by verifying the pipe method exists.
