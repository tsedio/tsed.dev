---
title: PlatformExpressSettings from @tsed/platform-express
description: api documentation of PlatformExpressSettings from @tsed/platform-express
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformExpressSettings interface
---
# PlatformExpressSettings - @tsed/platform-express

## Usage

```typescript
import { PlatformExpressSettings } from "@tsed/platform-express";
```

> See [/packages/platform/platform-express/src/interfaces/PlatformExpressSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-express/src/interfaces/PlatformExpressSettings.ts#L0-L0).

## Overview

```ts
interface PlatformExpressSettings {
    version?: "v4" | "v5";
    router?: RouterOptions;
    app?: Express.Application;
    bodyParser?: {
        json?: ((opts?: OptionsJson) => NextHandleFunction) | OptionsJson;
        text?: ((opts?: OptionsText) => NextHandleFunction) | OptionsText;
        raw?: ((opts?: Options) => NextHandleFunction) | Options;
        urlencoded?: ((opts?: OptionsUrlencoded) => NextHandleFunction) | OptionsUrlencoded;
    };
    useRawBody?: boolean;
}
```

<!-- Members -->

## version

```ts
version?: "v4" | "v5";
```

Force Express version detection. Use when Ts.ED doesn't detect the version automatically.

## router

```ts
router?: RouterOptions;
```

Global configuration for the Express.Router. See express [documentation](http://expressjs.com/en/api.html#express.router).

## app

```ts
app?: Express.Application;
```

Express application

## bodyParser

```ts
bodyParser?: {
     json?: ((opts?: OptionsJson) => NextHandleFunction) | OptionsJson;
     text?: ((opts?: OptionsText) => NextHandleFunction) | OptionsText;
     raw?: ((opts?: Options) => NextHandleFunction) | Options;
     urlencoded?: ((opts?: OptionsUrlencoded) => NextHandleFunction) | OptionsUrlencoded;
 };
```

body parser configuration

## useRawBody

```ts
useRawBody?: boolean;
```
