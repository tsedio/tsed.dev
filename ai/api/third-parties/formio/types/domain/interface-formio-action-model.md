---
title: FormioActionModel from @tsed/formio
description: api documentation of FormioActionModel from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation FormioActionModel interface
---
# FormioActionModel - @tsed/formio

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

<!-- Members -->

## resolve

```ts
resolve(handler: string, method: string, req: Request, res: Response, next: Function, setActionItemMessage: SetActionItemMessage): void;
```
