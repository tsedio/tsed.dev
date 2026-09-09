---
title: logger from @tsed/di
description: api documentation of logger from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation logger function
---
# logger - @tsed/di

## Usage

```typescript
import { logger } from "@tsed/di";
```

> See [/packages/di/src/common/fn/logger.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/fn/logger.ts#L0-L0).

## Overview

```ts
function logger(): import("../index.js").DILogger;
```

<!-- Description -->

## Description

Get the current logger instance from the injector.

Returns the configured logger (defaults to console if not set).

### Usage

```typescript
import {logger} from "@tsed/di";

logger().info("Application started");
logger().error("An error occurred", error);
```
