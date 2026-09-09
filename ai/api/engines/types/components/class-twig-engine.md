---
title: TwigEngine from @tsed/engines
description: api documentation of TwigEngine from @tsed/engines
meta:
 - name: keywords
   description: api typescript node.js documentation TwigEngine class
---
# TwigEngine - @tsed/engines

## Usage

```typescript
import { TwigEngine } from "@tsed/engines/src/components/TwigEngine";
```

> See [/packages/engines/src/components/TwigEngine.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/engines/src/components/TwigEngine.ts#L0-L0).

## Overview

```ts
class TwigEngine extends Engine {
    protected $cacheOptions(template: string, options: any): any;
    protected $compile(template: string, options: EngineOptions): (options: EngineOptions) => any;
}
```

<!-- Members -->

## protected $cacheOptions

```ts
protected $cacheOptions(template: string, options: any): any;
```

## protected $compile

```ts
protected $compile(template: string, options: EngineOptions): (options: EngineOptions) => any;
```
