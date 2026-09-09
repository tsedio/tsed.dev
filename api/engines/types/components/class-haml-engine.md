---
url: /api/engines/types/components/class-haml-engine.md
description: api documentation of HamlEngine from @tsed/engines
---

## Usage

```typescript
import { HamlEngine } from "@tsed/engines/src/components/HamlEngine";
```

> See [/packages/engines/src/components/HamlEngine.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/engines/src/components/HamlEngine.ts#L0-L0).

## Overview

```ts
class HamlEngine extends Engine {
    protected $compile(template: string, options: any): (options: any) => Promise<any>;
}
```

## protected $compile

```ts
protected $compile(template: string, options: any): (options: any) => Promise<any>;
```
