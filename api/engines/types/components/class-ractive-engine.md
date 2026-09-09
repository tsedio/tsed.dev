---
url: /api/engines/types/components/class-ractive-engine.md
description: api documentation of RactiveEngine from @tsed/engines
---

## Usage

```typescript
import { RactiveEngine } from "@tsed/engines/src/components/RactiveEngine";
```

> See [/packages/engines/src/components/RactiveEngine.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/engines/src/components/RactiveEngine.ts#L0-L0).

## Overview

```ts
class RactiveEngine extends Engine {
    protected $compile(template: string, options: EngineOptions): (options: EngineOptions) => any;
    protected clean(options: any): any;
}
```

## protected $compile

```ts
protected $compile(template: string, options: EngineOptions): (options: EngineOptions) => any;
```

## protected clean

```ts
protected clean(options: any): any;
```
