---
title: DILoggerOptions from @tsed/di
description: api documentation of DILoggerOptions from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation DILoggerOptions interface
---
# DILoggerOptions - @tsed/di

## Usage

```typescript
import { DILoggerOptions } from "@tsed/di";
```

> See [/packages/di/src/common/interfaces/DILoggerOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/DILoggerOptions.ts#L0-L0).

## Overview

```ts
interface DILoggerOptions {
    debug?: boolean;
    level?: "debug" | "info" | "warn" | "error" | "off";
    perf?: boolean;
    ignoreUrlPatterns?: (string | RegExp)[];
    jsonIndentation?: number;
    reqIdBuilder?: (req: any) => string;
    disableRoutesSummary?: boolean;
    disableBootstrapLog?: boolean;
    format?: string;
    maxStackSize?: number;
}
```

<!-- Description -->

## Description

Configuration options for the DI Logger.

Controls logging behavior, formatting, and filtering for the Ts.ED logging system.
These options can be set in the application configuration under the `logger` property.

### Usage

```typescript
import {Configuration} from "@tsed/di";

@Configuration({
  logger: {
    level: "debug",
    format: "%d{yyyy-MM-dd HH:mm:ss} %p %m",
    disableRoutesSummary: false
  }
})
class Server {}
```

<!-- Members -->

## debug

```ts
debug?: boolean;
```

Enable debug mode. By default debug is false.

## level

```ts
level?: "debug" | "info" | "warn" | "error" | "off";
```

Enable info mode. By default debug is false.

## perf

```ts
perf?: boolean;
```

Enable log performance tracker and disable log server.

## ignoreUrlPatterns:

```ts
ignoreUrlPatterns?: (string | RegExp)[];
```

List of regexp to ignore log.

## jsonIndentation

```ts
jsonIndentation?: number;
```

The number of space characters to use as white space in JSON output. Default is 2 (0 in production).

## reqIdBuilder:

```ts
reqIdBuilder?: (req: any) => string;
```

A function called for each incoming request to create a request id.

## disableRoutesSummary

```ts
disableRoutesSummary?: boolean;
```

Disable routes table displayed in the logger. By default debug is `false`.

## disableBootstrapLog

```ts
disableBootstrapLog?: boolean;
```

Disable bootstrap log displayed in the logger. By default debug is `false`.

## format

```ts
format?: string;
```

Specify log format. Example: `%[%d{[yyyy-MM-dd hh:mm:ss,SSS}] %p%] %m`. See [@tsed/logger configuration](https://tsedio.github.io/logger/).

## maxStackSize

```ts
maxStackSize?: number;
```

Specify the log stack size for the context.logger. When the stack.length is reach, the logger is flushed during the request.
Default size is set to 30.
