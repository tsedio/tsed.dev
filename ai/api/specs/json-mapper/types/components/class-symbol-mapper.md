---
title: SymbolMapper from @tsed/json-mapper
description: api documentation of SymbolMapper from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation SymbolMapper class
---
# SymbolMapper - @tsed/json-mapper

## Usage

```typescript
import { SymbolMapper } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/components/SymbolMapper.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/components/SymbolMapper.ts#L0-L0).

## Overview

```ts
class SymbolMapper implements JsonMapperMethods {
    deserialize(data: string): symbol;
    serialize(object: Symbol): any;
}
```

<!-- Description -->

## Description

Mapper for the `Symbol` type.

<!-- Members -->

## deserialize

```ts
deserialize(data: string): symbol;
```

## serialize

```ts
serialize(object: Symbol): any;
```
