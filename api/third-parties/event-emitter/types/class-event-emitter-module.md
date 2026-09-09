---
url: /api/third-parties/event-emitter/types/class-event-emitter-module.md
description: api documentation of EventEmitterModule from @tsed/event-emitter
---

## Usage

```typescript
import { EventEmitterModule } from "@tsed/event-emitter";
```

> See [/packages/third-parties/event-emitter/src/EventEmitterModule.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/event-emitter/src/EventEmitterModule.ts#L0-L0).

## Overview

```ts
class EventEmitterModule {
    protected logger: import("@tsed/di").DILogger;
    protected eventEmitter: import("eventemitter2").EventEmitter2;
    
    $onInit(): void;
    $onReady(): void;
    printEvents(): void;
    
    
}
```

## protected logger: import

```ts
protected logger: import("@tsed/di").DILogger;
```

## protected eventEmitter: import

```ts
protected eventEmitter: import("eventemitter2").EventEmitter2;
```

## $onInit

```ts
$onInit(): void;
```

## $onReady

```ts
$onReady(): void;
```

## printEvents

```ts
printEvents(): void;
```
