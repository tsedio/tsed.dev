---
url: /api/engines/types/components/class-just-engine.md
description: api documentation of JustEngine from @tsed/engines
---

## Usage

```typescript
import { JustEngine } from "@tsed/engines/src/components/JustEngine";
```

> See [/packages/engines/src/components/JustEngine.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/engines/src/components/JustEngine.ts#L0-L0).

## Overview

```ts
class JustEngine extends Engine {
    protected $compile(template: string, options: any): (options: any) => any;
    protected $compileFile(file: string, options: any): Promise<(options: any) => any>;
}
```

## protected $compile

```ts
protected $compile(template: string, options: any): (options: any) => any;
```

## protected $compileFile

```ts
protected $compileFile(file: string, options: any): Promise<(options: any) => any>;
```
