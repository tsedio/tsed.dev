---
title: ActionMethods from @tsed/formio
description: api documentation of ActionMethods from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation ActionMethods interface
---
# ActionMethods - @tsed/formio

## Usage

```typescript
import { ActionMethods } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioAction.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioAction.ts#L0-L0).

## Overview

```ts
interface ActionMethods {
    info?(req: Request, response: Response): Promise<FormioAction>;
    settingsForm(req: Request, response: Response): Promise<FormioComponent[]>;
    resolve(...args: any[]): Promise<any>;
}
```

<!-- Members -->

## info

```ts
info?(req: Request, response: Response): Promise<FormioAction>;
```

## settingsForm

```ts
settingsForm(req: Request, response: Response): Promise<FormioComponent[]>;
```

## resolve

```ts
resolve(...args: any[]): Promise<any>;
```
