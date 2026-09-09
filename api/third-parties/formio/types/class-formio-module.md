---
url: /api/third-parties/formio/types/class-formio-module.md
description: api documentation of FormioModule from @tsed/formio
---

## Usage

```typescript
import { FormioModule } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/FormioModule.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/FormioModule.ts#L0-L0).

## Overview

```ts
class FormioModule implements OnRoutesInit, OnReady {
    protected formio: FormioService;
    protected hooks: FormioHooksService;
    protected installer: FormioInstaller;
    protected app: PlatformApplication;
    protected injector: InjectorService;
    protected settings: FormioConfig;
    protected baseUrl: string;
    protected skipInstall: boolean;
    protected template?: FormioTemplate;
    protected root?: any;
    $onInit(): Promise<import("./index.js").Formio> | undefined;
    init(options: FormioConfig): Promise<import("./index.js").Formio> | undefined;
    $onRoutesInit(): Promise<void>;
    $logRoutes(routes: PlatformRouteDetails[]): Promise<PlatformRouteDetails[]>;
    $onReady(): void;
    protected shouldInstall(): Promise<boolean | undefined>;
}
```

## protected formio

```ts
protected formio: FormioService;
```

## protected hooks

```ts
protected hooks: FormioHooksService;
```

## protected installer

```ts
protected installer: FormioInstaller;
```

## protected app

```ts
protected app: PlatformApplication;
```

## protected injector

```ts
protected injector: InjectorService;
```

## protected settings

```ts
protected settings: FormioConfig;
```

## protected baseUrl

```ts
protected baseUrl: string;
```

## protected skipInstall

```ts
protected skipInstall: boolean;
```

## protected template

```ts
protected template?: FormioTemplate;
```

## protected root

```ts
protected root?: any;
```

## $onInit

```ts
$onInit(): Promise<import("./index.js").Formio> | undefined;
```

## init

```ts
init(options: FormioConfig): Promise<import("./index.js").Formio> | undefined;
```

## $onRoutesInit

```ts
$onRoutesInit(): Promise<void>;
```

## $logRoutes

```ts
$logRoutes(routes: PlatformRouteDetails[]): Promise<PlatformRouteDetails[]>;
```

## $onReady

```ts
$onReady(): void;
```

## protected shouldInstall

```ts
protected shouldInstall(): Promise<boolean | undefined>;
```
