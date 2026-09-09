---
title: DILogger from @tsed/di
description: api documentation of DILogger from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation DILogger interface
---
# DILogger - @tsed/di

## Usage

```typescript
import { DILogger } from "@tsed/di";
```

> See [/packages/di/src/common/interfaces/DILogger.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/DILogger.ts#L0-L0).

## Overview

```ts
interface DILogger {
    info(...args: any[]): void | any;
    warn(...args: any[]): void | any;
    debug(...args: any[]): void | any;
    error(...args: any[]): void | any;
    trace(...args: any[]): void | any;
    [key: string]: any;
}
```

<!-- Description -->

## Description

Logger interface for the Dependency Injection system.

Defines the contract for logging implementations used throughout Ts.ED's DI framework.
Custom logger implementations must conform to this interface to be compatible with the DI system.

### Usage

```typescript
import {DILogger} from "@tsed/di";

class CustomLogger implements DILogger {
  info(...args: any[]) {
    console.log("[INFO]", ...args);
  }

  warn(...args: any[]) {
    console.warn("[WARN]", ...args);
  }

  debug(...args: any[]) {
    console.debug("[DEBUG]", ...args);
  }

  error(...args: any[]) {
    console.error("[ERROR]", ...args);
  }

  trace(...args: any[]) {
    console.trace("[TRACE]", ...args);
  }
}
```

<!-- Members -->

## info

```ts
info(...args: any[]): void | any;
```

## warn

```ts
warn(...args: any[]): void | any;
```

## debug

```ts
debug(...args: any[]): void | any;
```

## error

```ts
error(...args: any[]): void | any;
```

## trace

```ts
trace(...args: any[]): void | any;
```

## \[key: string]

```ts
[key: string]: any;
```
