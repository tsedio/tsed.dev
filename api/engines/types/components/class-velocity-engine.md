---
url: /api/engines/types/components/class-velocity-engine.md
description: api documentation of VelocityEngine from @tsed/engines
---

## Usage

```typescript
import { VelocityEngine } from "@tsed/engines/src/components/VelocityEngine";
```

> See [/packages/engines/src/components/VelocityEngine.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/engines/src/components/VelocityEngine.ts#L0-L0).

## Overview

```ts
class VelocityEngine extends Engine {
    protected $compile(template: string, options: EngineOptions): (options: EngineOptions) => Promise<any>;
}
```

## protected $compile

```ts
protected $compile(template: string, options: EngineOptions): (options: EngineOptions) => Promise<any>;
```
