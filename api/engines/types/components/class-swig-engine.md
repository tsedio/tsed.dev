---
url: /api/engines/types/components/class-swig-engine.md
description: api documentation of SwigEngine from @tsed/engines
---

## Usage

```typescript
import { SwigEngine } from "@tsed/engines/src/components/SwigEngine";
```

> See [/packages/engines/src/components/SwigEngine.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/engines/src/components/SwigEngine.ts#L0-L0).

## Overview

```ts
class SwigEngine extends Engine {
    protected $compile(template: string, options: any): (options: any) => Promise<string>;
}
```

## protected $compile

```ts
protected $compile(template: string, options: any): (options: any) => Promise<string>;
```
