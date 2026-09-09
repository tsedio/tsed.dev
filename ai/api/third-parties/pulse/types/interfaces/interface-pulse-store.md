---
title: PulseStore from @tsed/pulse
description: api documentation of PulseStore from @tsed/pulse
meta:
 - name: keywords
   description: api typescript node.js documentation PulseStore interface
---
# PulseStore - @tsed/pulse

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

<!-- Members -->

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
