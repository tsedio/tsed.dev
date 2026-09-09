---
url: /api/third-parties/formio/types/components/class-alter-actions.md
description: api documentation of AlterActions from @tsed/formio
---

## Usage

```typescript
import { AlterActions } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/components/AlterActions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/components/AlterActions.ts#L0-L0).

## Overview

```ts
class AlterActions implements AlterHook {
    protected formio: FormioService;
    protected params: PlatformParams;
    protected responseFilter: PlatformResponseFilter;
    transform(actions: FormioActions): FormioActions;
    protected getActions(): Provider<any>[];
    protected createHandler(provider: Provider, propertyKey: string | symbol): (action: any, handler: string, method: string, req: any, res: any, next: any, setActionItemMessage: SetActionItemMessage) => Promise<void>;
    
}
```

## protected formio

```ts
protected formio: FormioService;
```

## protected params

```ts
protected params: PlatformParams;
```

## protected responseFilter

```ts
protected responseFilter: PlatformResponseFilter;
```

## transform

```ts
transform(actions: FormioActions): FormioActions;
```

## protected getActions

```ts
protected getActions(): Provider<any>[];
```

## protected createHandler

```ts
protected createHandler(provider: Provider, propertyKey: string | symbol): (action: any, handler: string, method: string, req: any, res: any, next: any, setActionItemMessage: SetActionItemMessage) => Promise<void>;
```
