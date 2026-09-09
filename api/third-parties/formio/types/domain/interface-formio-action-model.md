---
url: /api/third-parties/formio/types/domain/interface-formio-action-model.md
description: api documentation of FormioActionModel from @tsed/formio
---

## Usage

```typescript
import { FormioActionModel } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioAction.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioAction.ts#L0-L0).

## Overview

```ts
interface FormioActionModel extends FormioAction {
    resolve(handler: string, method: string, req: Request, res: Response, next: Function, setActionItemMessage: SetActionItemMessage): void;
}
```

## resolve

```ts
resolve(handler: string, method: string, req: Request, res: Response, next: Function, setActionItemMessage: SetActionItemMessage): void;
```
