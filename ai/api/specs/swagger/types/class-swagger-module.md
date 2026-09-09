---
title: SwaggerModule from @tsed/swagger
description: api documentation of SwaggerModule from @tsed/swagger
meta:
 - name: keywords
   description: api typescript node.js documentation SwaggerModule class
---
# SwaggerModule - @tsed/swagger

## Usage

```typescript
import { SwaggerModule } from "@tsed/swagger";
```

> See [/packages/specs/swagger/src/SwaggerModule.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/swagger/src/SwaggerModule.ts#L0-L0).

## Overview

```ts
class SwaggerModule extends OpenAPIBaseModule {
    readonly name = "Swagger";
    readonly rootDir: string;
    get settings(): ({
        disableSpec: boolean;
        path: string;
        fileName: string;
        cssPath: string;
        viewPath: string;
    } & SwaggerSettings)[];
    protected createRouter(conf: SwaggerSettings): import("@tsed/platform-router").PlatformRouter;
    protected getUrls(): any[];
}
```

<!-- Members -->

## readonly name

```ts
readonly name = "Swagger";
```

## readonly rootDir

```ts
readonly rootDir: string;
```

## get settings

```ts
get settings(): ({
     disableSpec: boolean;
     path: string;
     fileName: string;
     cssPath: string;
     viewPath: string;
 } & SwaggerSettings)[];
```

## protected createRouter

```ts
protected createRouter(conf: SwaggerSettings): import("@tsed/platform-router").PlatformRouter;
```

## protected getUrls

```ts
protected getUrls(): any[];
```
