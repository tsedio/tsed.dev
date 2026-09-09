---
title: LOGGER from @tsed/di
description: api documentation of LOGGER from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation LOGGER const
---
# LOGGER - @tsed/di

## Usage

```typescript
import { LOGGER } from "@tsed/di";
```

> See [/packages/di/src/common/services/DILogger.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/services/DILogger.ts#L0-L0).

## Overview

```ts
const LOGGER: unique symbol;

export type LOGGER = DILogger;
```

<!-- Description -->

## Description

Injection token for the DI logger service.

Use this symbol to inject the configured logger instance into your services.

### Usage

```typescript
import {Injectable, Inject, LOGGER} from "@tsed/di";

@Injectable()
class MyService {
  @Inject(LOGGER)
  logger: LOGGER;

  doSomething() {
    this.logger.info("Doing something");
  }
}
```
