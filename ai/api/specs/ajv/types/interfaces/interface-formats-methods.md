---
title: FormatsMethods from @tsed/ajv
description: api documentation of FormatsMethods from @tsed/ajv
meta:
 - name: keywords
   description: api typescript node.js documentation FormatsMethods interface
---
# FormatsMethods - @tsed/ajv

## Usage

```typescript
import { FormatsMethods } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/interfaces/FormatsMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/interfaces/FormatsMethods.ts#L0-L0).

## Overview

```ts
interface FormatsMethods<T extends string | number> {
    compare?: (data1: T, data2: T) => number | undefined;
    validate(data: T): boolean;
}
```

<!-- Members -->

## compare:

```ts
compare?: (data1: T, data2: T) => number | undefined;
```

## validate

```ts
validate(data: T): boolean;
```
