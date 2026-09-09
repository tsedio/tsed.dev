---
url: /api/third-parties/formio/types/services/class-formio-service.md
description: api documentation of FormioService from @tsed/formio
---

## Usage

```typescript
import { FormioService } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/services/FormioService.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/services/FormioService.ts#L0-L0).

## Overview

```ts
class FormioService {
    router: FormioRouter;
    protected injector: InjectorService;
    get audit(): Function;
    get auth(): import("../index.js").FormioAuth;
    get swagger(): (...args: any[]) => Promise<unknown>;
    get config(): FormioConfig;
    get db(): Db;
    get resources(): any;
    get mongoose(): Mongoose;
    get middleware(): import("../domain/Formio.js").FormioMiddlewares;
    get schemas(): FormioSchemas;
    get formio(): Formio;
    get hook(): FormioHook;
    get util(): import("../index.js").FormioUtil;
    get template(): import("../domain/FormioTemplateUtil.js").FormioTemplateUtil;
    get Action(): import("../index.js").FormioActionModelCtor;
    exportTemplate(options?: Partial<FormioExportOptions>): Promise<FormioTemplate>;
    importTemplate(template: FormioTemplate): Promise<FormioTemplate>;
    encrypt(text: string): Promise<string>;
    isInit(): boolean;
    createRouter(options: FormioConfig): any;
    init(options: FormioConfig, hooks?: FormioHooks): Promise<Formio> | undefined;
    protected mapConfiguration(options: FormioConfig): FormioConfig;
    protected bindLogger(): void;
}
```

## router

```ts
router: FormioRouter;
```

## protected injector

```ts
protected injector: InjectorService;
```

## get audit

```ts
get audit(): Function;
```

## get auth

```ts
get auth(): import("../index.js").FormioAuth;
```

## get swagger

```ts
get swagger(): (...args: any[]) => Promise<unknown>;
```

## get config

```ts
get config(): FormioConfig;
```

## get db

```ts
get db(): Db;
```

## get resources

```ts
get resources(): any;
```

## get mongoose

```ts
get mongoose(): Mongoose;
```

## get middleware

```ts
get middleware(): import("../domain/Formio.js").FormioMiddlewares;
```

## get schemas

```ts
get schemas(): FormioSchemas;
```

## get formio

```ts
get formio(): Formio;
```

## get hook

```ts
get hook(): FormioHook;
```

## get util

```ts
get util(): import("../index.js").FormioUtil;
```

## get template

```ts
get template(): import("../domain/FormioTemplateUtil.js").FormioTemplateUtil;
```

## get Action

```ts
get Action(): import("../index.js").FormioActionModelCtor;
```

## exportTemplate

```ts
exportTemplate(options?: Partial<FormioExportOptions>): Promise<FormioTemplate>;
```

## importTemplate

```ts
importTemplate(template: FormioTemplate): Promise<FormioTemplate>;
```

## encrypt

```ts
encrypt(text: string): Promise<string>;
```

## isInit

```ts
isInit(): boolean;
```

## createRouter

```ts
createRouter(options: FormioConfig): any;
```

## init

```ts
init(options: FormioConfig, hooks?: FormioHooks): Promise<Formio> | undefined;
```

## protected mapConfiguration

```ts
protected mapConfiguration(options: FormioConfig): FormioConfig;
```

## protected bindLogger

```ts
protected bindLogger(): void;
```
