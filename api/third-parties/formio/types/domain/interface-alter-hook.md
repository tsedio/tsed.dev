---
url: /api/third-parties/formio/types/domain/interface-alter-hook.md
description: api documentation of AlterHook from @tsed/formio
---

## Usage

```typescript
import { AlterHook } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/AlterHook.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/AlterHook.ts#L0-L0).

## Overview

```ts
interface AlterHook<T = any> {
    transform(...args: any[]): T;
}
```

## transform

```ts
transform(...args: any[]): T;
```
