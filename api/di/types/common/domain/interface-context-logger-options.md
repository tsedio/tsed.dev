---
url: /api/di/types/common/domain/interface-context-logger-options.md
description: api documentation of ContextLoggerOptions from @tsed/di
---

## Usage

```typescript
import { ContextLoggerOptions } from "@tsed/di";
```

> See [/packages/di/src/common/domain/ContextLogger.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/domain/ContextLogger.ts#L0-L0).

## Overview

```ts
interface ContextLoggerOptions extends Record<string, any> {
    id: string;
    logger?: DILogger;
    level?: "debug" | "info" | "warn" | "error" | "off" | "all";
    maxStackSize?: number;
    additionalProps?: Record<any, any>;
}
```

## Description

Options for creating a context logger instance.

## id

```ts
id: string;
```

## logger

```ts
logger?: DILogger;
```

## level

```ts
level?: "debug" | "info" | "warn" | "error" | "off" | "all";
```

## maxStackSize

```ts
maxStackSize?: number;
```

## additionalProps

```ts
additionalProps?: Record<any, any>;
```
