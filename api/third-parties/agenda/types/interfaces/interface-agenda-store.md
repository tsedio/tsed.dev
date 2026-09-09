---
url: /api/third-parties/agenda/types/interfaces/interface-agenda-store.md
description: api documentation of AgendaStore from @tsed/agenda
---

## Usage

```typescript
import { AgendaStore } from "@tsed/agenda";
```

> See [/packages/third-parties/agenda/src/interfaces/AgendaStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/agenda/src/interfaces/AgendaStore.ts#L0-L0).

## Overview

```ts
interface AgendaStore {
    namespace?: string;
    define?: {
        [propertyKey: string]: DefineOptions;
    };
    every?: {
        [propertyKey: string]: EveryOptions & {
            interval: string;
        };
    };
}
```

## namespace

```ts
namespace?: string;
```

## define

```ts
define?: {
     [propertyKey: string]: DefineOptions;
 };
```

## every

```ts
every?: {
     [propertyKey: string]: EveryOptions & {
         interval: string;
     };
 };
```
