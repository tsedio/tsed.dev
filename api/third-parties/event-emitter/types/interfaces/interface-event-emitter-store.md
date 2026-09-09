---
url: >-
  /api/third-parties/event-emitter/types/interfaces/interface-event-emitter-store.md
description: api documentation of EventEmitterStore from @tsed/event-emitter
---

## Usage

```typescript
import { EventEmitterStore } from "@tsed/event-emitter";
```

> See [/packages/third-parties/event-emitter/src/interfaces/EventEmitterStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/event-emitter/src/interfaces/EventEmitterStore.ts#L0-L0).

## Overview

```ts
interface EventEmitterStore {
    onEvent?: {
        [propertyKey: string]: {
            event: event | eventNS;
            options?: boolean | OnOptions;
        };
    };
    onAny?: {
        [propertyKey: string]: {};
    };
}
```

## onEvent

```ts
onEvent?: {
     [propertyKey: string]: {
         event: event | eventNS;
         options?: boolean | OnOptions;
     };
 };
```

## onAny

```ts
onAny?: {
     [propertyKey: string]: {};
 };
```
