---
title: contextLogger from @tsed/di
description: api documentation of contextLogger from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation contextLogger function
---
# contextLogger - @tsed/di

## Usage

```typescript
import { contextLogger } from "@tsed/di";
```

> See [/packages/di/src/browser/fn/contextLogger.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/browser/fn/contextLogger.ts#L0-L0).

## Overview

```ts
function contextLogger(): import("../index.js").ContextLogger;
```

<!-- Description -->

## Description

Get the current logger instance. If the logger() function is invoked in Request context, it will return the logger instance attached to the request context.
Otherwise, it will return the logger instance attached to the DI context.
