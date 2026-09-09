---
title: ArrayOfChainedDecorators from @tsed/schema
description: api documentation of ArrayOfChainedDecorators from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation ArrayOfChainedDecorators interface
---
# ArrayOfChainedDecorators - @tsed/schema

## Usage

```typescript
import { ArrayOfChainedDecorators } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/collections/collectionOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/collections/collectionOf.ts#L0-L0).

## Overview

```ts
interface ArrayOfChainedDecorators {
    (...args: any): any;
    Nested(...generics: any[]): this;
    MinItems(minItems: number): this;
    MaxItems(maxItems: number): this;
    Contains(): this;
    UniqueItems(uniqueItems?: boolean): this;
}
```

<!-- Members -->

##

```ts
(...args: any): any;
```

## Nested

```ts
Nested(...generics: any[]): this;
```

## MinItems

```ts
MinItems(minItems: number): this;
```

An array instance is valid against `minItems` if its size is greater than, or equal to, the value of this keyword.

::: warning
The value `minItems` MUST be a non-negative integer.
:::

::: tip
Omitting this keyword has the same behavior as a value of 0.
:::

## MaxItems

```ts
MaxItems(maxItems: number): this;
```

The value `maxItems` MUST be a non-negative integer.

An array instance is valid against `maxItems` if its size is less than, or equal to, the value of this keyword.

:: warning
The value `maxItems` MUST be a non-negative integer.
:::

## Contains

```ts
Contains(): this;
```

Set the type of the item collection. The possible value is String, Boolean, Number, Date, Object, Class, etc...

The array instance will be valid against "contains" if at least one of its elements is valid against the given schema.

## UniqueItems

```ts
UniqueItems(uniqueItems?: boolean): this;
```

If this keyword has boolean value false, the instance validates successfully. If it has boolean value true, the instance validates successfully if all of its elements are unique.
