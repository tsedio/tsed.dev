---
url: /api/engines/types/components/class-engine.md
description: api documentation of Engine from @tsed/engines
---

## Usage

```typescript
import { Engine } from "@tsed/engines";
```

> See [/packages/engines/src/components/Engine.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/engines/src/components/Engine.ts#L0-L0).

## Overview

```ts
class Engine {
    readonly name: string;
    readonly options: ViewEngineOptions;
    protected driverName: string;
    constructor(name: string, options: ViewEngineOptions);
    get engine(): any;
    $onInit(): Promise<void>;
    compile(template: string, options: EngineOptions): any;
    compileFile(file: string, options: EngineOptions): any;
    render(template: string, options: EngineOptions): Promise<any>;
    renderFile(file: string, options: EngineOptions): Promise<any>;
    protected readPartials(file: string, options: EngineOptions): Promise<EngineOptions>;
    protected $cacheOptions(template: string, options: EngineOptions, fromFile?: boolean): EngineOptions;
    protected $compile(template: string, options: EngineOptions): (options: EngineOptions) => Promise<string>;
    protected $compileFile(file: string, options: EngineOptions): Promise<(options: EngineOptions) => Promise<string>>;
    protected importEngine(name: string, options: ViewEngineOptions): Promise<void>;
}
```

## readonly name

```ts
readonly name: string;
```

## readonly options

```ts
readonly options: ViewEngineOptions;
```

## protected driverName

```ts
protected driverName: string;
```

## get engine

```ts
get engine(): any;
```

## $onInit

```ts
$onInit(): Promise<void>;
```

## compile

```ts
compile(template: string, options: EngineOptions): any;
```

## compileFile

```ts
compileFile(file: string, options: EngineOptions): any;
```

## render

```ts
render(template: string, options: EngineOptions): Promise<any>;
```

## renderFile

```ts
renderFile(file: string, options: EngineOptions): Promise<any>;
```

## protected readPartials

```ts
protected readPartials(file: string, options: EngineOptions): Promise<EngineOptions>;
```

## protected $cacheOptions

```ts
protected $cacheOptions(template: string, options: EngineOptions, fromFile?: boolean): EngineOptions;
```

## protected $compile

```ts
protected $compile(template: string, options: EngineOptions): (options: EngineOptions) => Promise<string>;
```

## protected $compileFile

```ts
protected $compileFile(file: string, options: EngineOptions): Promise<(options: EngineOptions) => Promise<string>>;
```

## protected importEngine

```ts
protected importEngine(name: string, options: ViewEngineOptions): Promise<void>;
```
