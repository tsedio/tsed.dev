---
title: FormioRouter from @tsed/formio
description: api documentation of FormioRouter from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation FormioRouter interface
---
# FormioRouter - @tsed/formio

## Usage

```typescript
import { FormioRouter } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioRouter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioRouter.ts#L0-L0).

## Overview

```ts
interface FormioRouter extends Router {
    formio: FormioBase;
    init(hooks: FormioHooks): Promise<Formio>;
}
```

<!-- Members -->

## formio

```ts
formio: FormioBase;
```

## init

```ts
init(hooks: FormioHooks): Promise<Formio>;
```
