---
title: AlterHook from @tsed/formio
description: api documentation of AlterHook from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation AlterHook interface
---
# AlterHook - @tsed/formio

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

<!-- Members -->

## transform

```ts
transform(...args: any[]): T;
```
