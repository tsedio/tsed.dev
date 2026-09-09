---
url: /api/di/types/common/services/const-logger.md
description: api documentation of LOGGER from @tsed/di
---

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
