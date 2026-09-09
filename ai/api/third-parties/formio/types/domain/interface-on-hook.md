---
title: OnHook from @tsed/formio
description: api documentation of OnHook from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation OnHook interface
---
# OnHook - @tsed/formio

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

<!-- Members -->

## on

```ts
on(...args: any[]): boolean | void;
```
