---
title: FormioHook from @tsed/formio
description: api documentation of FormioHook from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation FormioHook interface
---
# FormioHook - @tsed/formio

## Usage

```typescript
import { FormioHook } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioHooks.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioHooks.ts#L0-L0).

## Overview

```ts
interface FormioHook {
    settings(req: Request, cb: Function): void;
    invoke<T = any>(...args: any[]): T | boolean;
    alter(event: string, ...args: any[]): any;
}
```

<!-- Members -->

## settings

```ts
settings(req: Request, cb: Function): void;
```

Run settings function.

## invoke

```ts
invoke<T = any>(...args: any[]): T | boolean;
```

Emit an event.

## alter

```ts
alter(event: string, ...args: any[]): any;
```

Alter the given value by calling all listener.
