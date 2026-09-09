---
url: /api/third-parties/formio/types/domain/interface-action-methods.md
description: api documentation of ActionMethods from @tsed/formio
---

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
