---
title: GenericOf from @tsed/schema
description: api documentation of GenericOf from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation GenericOf decorator
---
# GenericOf - @tsed/schema

## Usage

```typescript
import { GenericOf } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/generics/genericOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/generics/genericOf.ts#L0-L0).

## Overview

```ts
function GenericOf(...generics: GenericValue[]): GenericOfChainedDecorators;
```

<!-- Description -->

## Description

Set the types of a Generic class.

## Example

```typescript
class Product {
  @Property()
  label: string;
}

@Generics("T")
class Paginated<T> {
  @CollectionOf("T")
  data: T[];

  @Property()
  totalCount: number;
}

class Payload {
   @GenericOf(Product)
   products: Paginated<Product>;
}
```

## Example with nested generics

```typescript
class Product {
  @Property()
  label: string;
}

@Generics("T")
class Paginated<T> {
  @CollectionOf("T")
  data: T[];

  @Property()
  totalCount: number;
}

@Generics("D")
class Submission<D> {
  @Property()
  _id: string;

  @Property("D")
  data: D;
}

class Payload {
   @GenericOf(Submissions).Nested(Product)
   submissions: Paginated<Submission<Product>>;
}
```
