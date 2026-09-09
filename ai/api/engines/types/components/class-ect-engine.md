---
title: EctEngine from @tsed/engines
description: api documentation of EctEngine from @tsed/engines
meta:
 - name: keywords
   description: api typescript node.js documentation EctEngine class
---
# EctEngine - @tsed/engines

## Usage

```typescript
import { EctEngine } from "@tsed/engines/src/components/EctEngine";
```

> See [/packages/engines/src/components/EctEngine.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/engines/src/components/EctEngine.ts#L0-L0).

## Overview

```ts
class EctEngine extends Engine {
    protected $compile(template: string, options: any): (options: any) => any;
    protected $compileFile(file: string, options: any): Promise<(options: any) => any>;
}
```

<!-- Members -->

## protected $compile

```ts
protected $compile(template: string, options: any): (options: any) => any;
```

## protected $compileFile

```ts
protected $compileFile(file: string, options: any): Promise<(options: any) => any>;
```
