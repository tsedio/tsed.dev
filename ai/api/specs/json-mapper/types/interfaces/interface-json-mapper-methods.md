---
title: JsonMapperMethods from @tsed/json-mapper
description: api documentation of JsonMapperMethods from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation JsonMapperMethods interface
---
# JsonMapperMethods - @tsed/json-mapper

## Usage

```typescript
import { JsonMapperMethods } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/interfaces/JsonMapperMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/interfaces/JsonMapperMethods.ts#L0-L0).

## Overview

```ts
interface JsonMapperMethods {
    deserialize<T = any, C = any>(obj: any, ctx: JsonMapperCtx<T, C>): any;
    serialize(obj: any, ctx: JsonMapperCtx<any>): any;
}
```

<!-- Description -->

## Description

Contract implemented by every custom JSON mapper.

<!-- Members -->

## deserialize

```ts
deserialize<T = any, C = any>(obj: any, ctx: JsonMapperCtx<T, C>): any;
```

Transform raw data into the target type or collection item.

## serialize

```ts
serialize(obj: any, ctx: JsonMapperCtx<any>): any;
```

Transform a runtime value into its serialized representation.
