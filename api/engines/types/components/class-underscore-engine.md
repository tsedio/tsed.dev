---
url: /api/engines/types/components/class-underscore-engine.md
description: api documentation of UnderscoreEngine from @tsed/engines
---

## Usage

```typescript
import { UnderscoreEngine } from "@tsed/engines/src/components/UnderscoreEngine";
```

> See [/packages/engines/src/components/UnderscoreEngine.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/engines/src/components/UnderscoreEngine.ts#L0-L0).

## Overview

```ts
class UnderscoreEngine extends Engine {
    render(template: string, options: any): Promise<string>;
    protected $cacheOptions(template: string, options: any): any;
    protected $compile(template: string, options: any): (options: any) => Promise<string>;
}
```

## render

```ts
render(template: string, options: any): Promise<string>;
```

## protected $cacheOptions

```ts
protected $cacheOptions(template: string, options: any): any;
```

## protected $compile

```ts
protected $compile(template: string, options: any): (options: any) => Promise<string>;
```
