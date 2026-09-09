---
url: /api/third-parties/formio/types/domain/interface-formio-router.md
description: api documentation of FormioRouter from @tsed/formio
---

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

## formio

```ts
formio: FormioBase;
```

## init

```ts
init(hooks: FormioHooks): Promise<Formio>;
```
