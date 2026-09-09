---
url: /api/specs/json-mapper/types/components/class-symbol-mapper.md
description: api documentation of SymbolMapper from @tsed/json-mapper
---

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

## Description

Mapper for the `Symbol` type.

## deserialize

```ts
deserialize(data: string): symbol;
```

## serialize

```ts
serialize(object: Symbol): any;
```
