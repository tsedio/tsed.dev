---
title: OpenAPIBaseModule from @tsed/openapi-utils
description: api documentation of OpenAPIBaseModule from @tsed/openapi-utils
meta:
 - name: keywords
   description: api typescript node.js documentation OpenAPIBaseModule class
---
# OpenAPIBaseModule - @tsed/openapi-utils

## Usage

```typescript
import { OpenAPIBaseModule } from "@tsed/openapi-utils";
```

> See [/packages/specs/openapi-utils/src/services/OpenAPIBaseModule.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openapi-utils/src/services/OpenAPIBaseModule.ts#L0-L0).

## Overview

```ts
abstract class OpenAPIBaseModule implements OnRoutesInit, OnReady {
    abstract name: string;
    abstract rootDir: string;
    abstract settings: OpenApiSettings[];
    protected openAPIService: OpenAPIService;
    protected env: Env | undefined;
    protected disableRoutesSummary: boolean | undefined;
    $onRoutesInit(): void;
    $onReady(): void;
    generateSpecFiles(): Promise<void[]>;
    protected createRouter(conf: OpenApiSettings): PlatformRouter;
}
```

<!-- Members -->

## abstract name

```ts
abstract name: string;
```

## abstract rootDir

```ts
abstract rootDir: string;
```

## abstract settings

```ts
abstract settings: OpenApiSettings[];
```

## protected openAPIService

```ts
protected openAPIService: OpenAPIService;
```

## protected env

```ts
protected env: Env | undefined;
```

## protected disableRoutesSummary

```ts
protected disableRoutesSummary: boolean | undefined;
```

## $onRoutesInit

```ts
$onRoutesInit(): void;
```

## $onReady

```ts
$onReady(): void;
```

## generateSpecFiles

```ts
generateSpecFiles(): Promise<void[]>;
```

## protected createRouter

```ts
protected createRouter(conf: OpenApiSettings): PlatformRouter;
```
