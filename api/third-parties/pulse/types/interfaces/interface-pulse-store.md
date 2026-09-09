---
url: /api/third-parties/pulse/types/interfaces/interface-pulse-store.md
description: api documentation of PulseStore from @tsed/pulse
---

## Usage

```typescript
import { PulseStore } from "@tsed/pulse";
```

> See [/packages/third-parties/pulse/src/interfaces/PulseStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/pulse/src/interfaces/PulseStore.ts#L0-L0).

## Overview

```ts
interface PulseStore {
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
