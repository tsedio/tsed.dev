---
title: MapOfChainedDecorators from @tsed/schema
description: api documentation of MapOfChainedDecorators from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation MapOfChainedDecorators interface
---
# MapOfChainedDecorators - @tsed/schema

## Usage

```typescript
import { MapOfChainedDecorators } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/collections/collectionOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/collections/collectionOf.ts#L0-L0).

## Overview

```ts
interface MapOfChainedDecorators {
    (...args: any): any;
    MinProperties(minProperties: number): this;
    MaxProperties(maxProperties: number): this;
}
```

<!-- Members -->

##

```ts
(...args: any): any;
```

## MinProperties

```ts
MinProperties(minProperties: number): this;
```

An object instance is valid against `minProperties` if its number of properties is less than, or equal to, the value of this keyword.

::: warning
The value of this keyword MUST be a non-negative integer.
:::

## MaxProperties

```ts
MaxProperties(maxProperties: number): this;
```

An object instance is valid against `maxProperties` if its number of properties is less than, or equal to, the value of this keyword.

::: warning
The value of this keyword MUST be a non-negative integer.
:::
