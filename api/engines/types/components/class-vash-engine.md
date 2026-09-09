---
url: /api/engines/types/components/class-vash-engine.md
description: api documentation of VashEngine from @tsed/engines
---

## Usage

```typescript
import { VashEngine } from "@tsed/engines/src/components/VashEngine";
```

> See [/packages/engines/src/components/VashEngine.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/engines/src/components/VashEngine.ts#L0-L0).

## Overview

```ts
class VashEngine extends Engine {
    compile(template: string, options: any): (options: any) => Promise<string>;
    render(template: string, options: any): Promise<string>;
}
```

## compile

```ts
compile(template: string, options: any): (options: any) => Promise<string>;
```

## render

```ts
render(template: string, options: any): Promise<string>;
```
