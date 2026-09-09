---
url: /api/di/types/common/domain/class-context-logger.md
description: api documentation of ContextLogger from @tsed/di
---

## Usage

```typescript
import { ContextLogger } from "@tsed/di";
```

> See [/packages/di/src/common/domain/ContextLogger.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/domain/ContextLogger.ts#L0-L0).

## Overview

```ts
class ContextLogger {
    readonly dateStart: Date;
    readonly id: string;
    maxStackSize: number;
    constructor({ id, logger, dateStart, level, maxStackSize, additionalProps }: ContextLoggerOptions);
    get level(): "debug" | "info" | "warn" | "error" | "off" | "all" | LogLevel;
    set level(level: "debug" | "info" | "warn" | "error" | "off" | "all" | LogLevel);
    get hooks(): Hooks;
    alterLog(cb: (data: any, level: "debug" | "info" | "warn" | "error" | "all", withRequest: boolean) => any): Hooks;
    alterIgnoreLog(cb: (ignore: boolean, data: any) => boolean): Hooks;
    info(obj: any): this;
    debug(obj: any): this;
    warn(obj: any): this;
    error(obj: any): this;
    fatal(obj: any): this;
    trace(obj: any): this;
    flush(stream?: boolean): void;
    isLevelEnabled(otherLevel: string | LogLevel): boolean;
    protected getDuration(): number;
    protected getData(obj: any): any;
    protected run(level: LogLevel, obj: any, withRequest?: boolean): void;
}
```

## Description

Context-aware logger for scoped logging within a request or execution context.

Buffers log messages and associates them with a specific context (like an HTTP request).
Supports log level filtering, buffering, and automatic flushing when the context ends.

### Usage

```typescript
import {ContextLogger} from "@tsed/di";

const logger = new ContextLogger({id: "req-123"});

logger.info("Processing request");
logger.debug("Debug info");

await logger.flush(); // Write buffered logs
```

## readonly dateStart

```ts
readonly dateStart: Date;
```

## readonly id

```ts
readonly id: string;
```

## maxStackSize

```ts
maxStackSize: number;
```

## get level

```ts
get level(): "debug" | "info" | "warn" | "error" | "off" | "all" | LogLevel;
```

## set level

```ts
set level(level: "debug" | "info" | "warn" | "error" | "off" | "all" | LogLevel);
```

## get hooks

```ts
get hooks(): Hooks;
```

## alterLog

```ts
alterLog(cb: (data: any, level: "debug" | "info" | "warn" | "error" | "all", withRequest: boolean) => any): Hooks;
```

## alterIgnoreLog

```ts
alterIgnoreLog(cb: (ignore: boolean, data: any) => boolean): Hooks;
```

## info

```ts
info(obj: any): this;
```

## debug

```ts
debug(obj: any): this;
```

## warn

```ts
warn(obj: any): this;
```

## error

```ts
error(obj: any): this;
```

## fatal

```ts
fatal(obj: any): this;
```

## trace

```ts
trace(obj: any): this;
```

## flush

```ts
flush(stream?: boolean): void;
```

## isLevelEnabled

```ts
isLevelEnabled(otherLevel: string | LogLevel): boolean;
```

## protected getDuration

```ts
protected getDuration(): number;
```

Return the duration between the time when LogIncomingRequest has handle the request and now.

## protected getData

```ts
protected getData(obj: any): any;
```

## protected run

```ts
protected run(level: LogLevel, obj: any, withRequest?: boolean): void;
```
