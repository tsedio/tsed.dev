---
title: ReactEngine from @tsed/engines
description: api documentation of ReactEngine from @tsed/engines
meta:
 - name: keywords
   description: api typescript node.js documentation ReactEngine class
---
# ReactEngine - @tsed/engines

## Usage

```typescript
import { ReactEngine } from "@tsed/engines/src/components/ReactEngine";
```

> See [/packages/engines/src/components/ReactEngine.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/engines/src/components/ReactEngine.ts#L0-L0).

## Overview

```ts
class ReactEngine extends Engine {
    constructor(name: string, options: ViewEngineOptions);
    $onInit(): Promise<void>;
    get babel(): any;
    get reactDOM(): any;
    protected patchRequire(): void;
    protected configure(options: EngineOptions): {
        base: any;
        enableCache: boolean | undefined;
        isNonStatic: any;
    };
    protected $compile(template: string, options: EngineOptions): () => any;
    protected $compileFile(file: string, options: EngineOptions): Promise<() => any>;
    protected renderWithBase(key: string, base: any, enableCache: undefined | boolean, options: EngineOptions): any;
    protected transformFileSync(filename: string): any;
    protected transform(src: string): any;
    protected requireReact(module: any, filename: string): any;
    protected requireReactString(src: string, filename?: string): any;
    protected reactBaseTmpl(data: any, options: any): any;
}
```

<!-- Members -->

## $onInit

```ts
$onInit(): Promise<void>;
```

## get babel

```ts
get babel(): any;
```

## get reactDOM

```ts
get reactDOM(): any;
```

## protected patchRequire

```ts
protected patchRequire(): void;
```

## protected configure

```ts
protected configure(options: EngineOptions): {
     base: any;
     enableCache: boolean | undefined;
     isNonStatic: any;
 };
```

## protected $compile

```ts
protected $compile(template: string, options: EngineOptions): () => any;
```

## protected $compileFile

```ts
protected $compileFile(file: string, options: EngineOptions): Promise<() => any>;
```

## protected renderWithBase

```ts
protected renderWithBase(key: string, base: any, enableCache: undefined | boolean, options: EngineOptions): any;
```

## protected transformFileSync

```ts
protected transformFileSync(filename: string): any;
```

## protected transform

```ts
protected transform(src: string): any;
```

## protected requireReact

```ts
protected requireReact(module: any, filename: string): any;
```

## protected requireReactString

```ts
protected requireReactString(src: string, filename?: string): any;
```

## protected reactBaseTmpl

```ts
protected reactBaseTmpl(data: any, options: any): any;
```
