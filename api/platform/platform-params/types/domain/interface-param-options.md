---
url: /api/platform/platform-params/types/domain/interface-param-options.md
description: api documentation of ParamOptions from @tsed/platform-params
---

## Usage

```typescript
import { ParamOptions } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/domain/ParamOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/domain/ParamOptions.ts#L0-L0).

## Overview

```ts
interface ParamOptions<T = any> {
    dataPath: string;
    paramType: string;
    expression?: string;
    useType?: Type<T>;
    useMapper?: boolean;
    useValidation?: boolean;
    [key: string]: any;
}
```

## dataPath

```ts
dataPath: string;
```

## paramType

```ts
paramType: string;
```

## expression

```ts
expression?: string;
```

## useType

```ts
useType?: Type<T>;
```

## useMapper

```ts
useMapper?: boolean;
```

## useValidation

```ts
useValidation?: boolean;
```

## \[key: string]

```ts
[key: string]: any;
```
