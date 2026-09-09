---
title: FormioAuthMiddleware from @tsed/formio
description: api documentation of FormioAuthMiddleware from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation FormioAuthMiddleware class
---
# FormioAuthMiddleware - @tsed/formio

## Usage

```typescript
import { FormioAuthMiddleware } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/middlewares/FormioAuthMiddleware.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/middlewares/FormioAuthMiddleware.ts#L0-L0).

## Overview

```ts
class FormioAuthMiddleware {
    protected formio: FormioService;
    get tokenHandler(): any;
    use(ctx: Context): Promise<void>;
}
```

<!-- Members -->

## protected formio

```ts
protected formio: FormioService;
```

## get tokenHandler

```ts
get tokenHandler(): any;
```

## use

```ts
use(ctx: Context): Promise<void>;
```
