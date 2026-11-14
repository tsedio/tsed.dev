---
title: PlatformFulmineSettings from @tsed/platform-fulmine
description: api documentation of PlatformFulmineSettings from @tsed/platform-fulmine
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformFulmineSettings interface
---
# PlatformFulmineSettings - @tsed/platform-fulmine

## Usage

```typescript
import { PlatformFulmineSettings } from "@tsed/platform-fulmine";
```

> See [/packages/platform/platform-fulmine/src/interfaces/PlatformFulmineSettings.ts](https://github.com/tsedio/tsed/blob/v8.47.1/packages/platform/platform-fulmine/src/interfaces/PlatformFulmineSettings.ts#L0-L0).

## Overview

```ts
interface PlatformFulmineSettings {
    app?: any;
    bodyParser?: {
        json?: ((opts?: OptionsJson) => NextHandleFunction) | OptionsJson;
        text?: ((opts?: OptionsText) => NextHandleFunction) | OptionsText;
        raw?: ((opts?: Options) => NextHandleFunction) | Options;
        urlencoded?: ((opts?: OptionsUrlencoded) => NextHandleFunction) | OptionsUrlencoded;
    };
}
```

<!-- Members -->

## app

```ts
app?: any;
```

The fulmine application to use instead of a new `fulmine()`, to pass options such as
`uwsOptions` for TLS.

## bodyParser

```ts
bodyParser?: {
     json?: ((opts?: OptionsJson) => NextHandleFunction) | OptionsJson;
     text?: ((opts?: OptionsText) => NextHandleFunction) | OptionsText;
     raw?: ((opts?: Options) => NextHandleFunction) | Options;
     urlencoded?: ((opts?: OptionsUrlencoded) => NextHandleFunction) | OptionsUrlencoded;
 };
```

body parser configuration, a function given here replaces the fulmine parser
