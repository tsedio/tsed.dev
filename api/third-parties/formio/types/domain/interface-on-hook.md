---
url: /api/third-parties/formio/types/domain/interface-on-hook.md
description: api documentation of OnHook from @tsed/formio
---

## Usage

```typescript
import { OnHook } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/OnHook.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/OnHook.ts#L0-L0).

## Overview

```ts
interface OnHook<T = any> {
    on(...args: any[]): boolean | void;
}
```

## on

```ts
on(...args: any[]): boolean | void;
```
