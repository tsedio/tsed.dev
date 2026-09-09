---
title: PrimitiveMapper from @tsed/json-mapper
description: api documentation of PrimitiveMapper from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation PrimitiveMapper class
---
# PrimitiveMapper - @tsed/json-mapper

## Usage

```typescript
import { PrimitiveMapper } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/components/PrimitiveMapper.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/components/PrimitiveMapper.ts#L0-L0).

## Overview

```ts
class PrimitiveMapper implements JsonMapperMethods {
    deserialize<T>(data: any, ctx: JsonMapperCtx): string | number | boolean | void | null | BigInt;
    serialize(object: string | number | boolean | BigInt, ctx: JsonMapperCtx): string | number | boolean | BigInt;
    protected String(data: any): string | null;
    protected Boolean(data: any): boolean | null | undefined;
    protected Number(data: any): any;
    protected BigInt(data: any): bigint | null;
}
```

<!-- Description -->

## Description

Mapper for the `String`, `Number`, `BigInt` and `Boolean` types.

<!-- Members -->

## deserialize

```ts
deserialize<T>(data: any, ctx: JsonMapperCtx): string | number | boolean | void | null | BigInt;
```

## serialize

```ts
serialize(object: string | number | boolean | BigInt, ctx: JsonMapperCtx): string | number | boolean | BigInt;
```

## protected String

```ts
protected String(data: any): string | null;
```

## protected Boolean

```ts
protected Boolean(data: any): boolean | null | undefined;
```

## protected Number

```ts
protected Number(data: any): any;
```

## protected BigInt

```ts
protected BigInt(data: any): bigint | null;
```
