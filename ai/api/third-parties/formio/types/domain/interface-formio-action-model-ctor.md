---
title: FormioActionModelCtor from @tsed/formio
description: api documentation of FormioActionModelCtor from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation FormioActionModelCtor interface
---
# FormioActionModelCtor - @tsed/formio

## Usage

```typescript
import { FormioActionModelCtor } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioAction.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioAction.ts#L0-L0).

## Overview

```ts
interface FormioActionModelCtor {
    schema?: FormioActionMongooseSchema;
    info(req: Request, response: Response, next: (err: any, info: FormioActionInfo) => void): void;
    settingsForm(req: Request, response: Response, next: (err: any, info: FormioComponent[]) => void): void;
    new (data: FormioAction, req: Request, res: Response): FormioActionModel;
}
```

<!-- Members -->

## schema

```ts
schema?: FormioActionMongooseSchema;
```

## info

```ts
info(req: Request, response: Response, next: (err: any, info: FormioActionInfo) => void): void;
```

## settingsForm

```ts
settingsForm(req: Request, response: Response, next: (err: any, info: FormioComponent[]) => void): void;
```

## new

```ts
new (data: FormioAction, req: Request, res: Response): FormioActionModel;
```
