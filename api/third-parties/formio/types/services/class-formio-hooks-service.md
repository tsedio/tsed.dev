---
url: /api/third-parties/formio/types/services/class-formio-hooks-service.md
description: api documentation of FormioHooksService from @tsed/formio
---

## Usage

```typescript
import { FormioHooksService } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/services/FormioHooksService.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/services/FormioHooksService.ts#L0-L0).

## Overview

```ts
class FormioHooksService {
    protected formio: FormioService;
    get settings(): (req: Request, cb: Function) => void;
    get invoke(): <T = any>(...args: any[]) => T | boolean;
    get alter(): (event: string, ...args: any[]) => any;
    get alterAsync(): (event: string, ...args: any[]) => Promise<any>;
    getHooks(): FormioHooks;
    protected getHooksProvider(type: "alter" | "on"): {};
    protected bindHooks(type: "alter" | "on", hooks: Record<string, Function[]>): {};
}
```

## protected formio

```ts
protected formio: FormioService;
```

## get settings

```ts
get settings(): (req: Request, cb: Function) => void;
```

## get invoke

```ts
get invoke(): <T = any>(...args: any[]) => T | boolean;
```

## get alter

```ts
get alter(): (event: string, ...args: any[]) => any;
```

## get alterAsync

```ts
get alterAsync(): (event: string, ...args: any[]) => Promise<any>;
```

## getHooks

```ts
getHooks(): FormioHooks;
```

## protected getHooksProvider

```ts
protected getHooksProvider(type: "alter" | "on"): {};
```

## protected bindHooks

```ts
protected bindHooks(type: "alter" | "on", hooks: Record<string, Function[]>): {};
```
