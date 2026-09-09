---
title: CollectionOf from @tsed/schema
description: api documentation of CollectionOf from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation CollectionOf decorator
---
# CollectionOf - @tsed/schema

## Usage

```typescript
import { CollectionOf } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/collections/collectionOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/collections/collectionOf.ts#L0-L0).

## Overview

```ts
function CollectionOf(type: any, collectionType?: any): CollectionOfChainedDecorators;
```

<!-- Description -->

## Description

Set the type of the item collection. The possible value is String, Boolean, Number, Date, Object, Class, etc...

```typescript
class Model {
   @CollectionOf(String).MinLength(0).MaxLength(0)
   property: string[];
}
```

::: warning
You mustn't use the `type Type = string | number` as parameters Type.

This example doesn't work:

```typescript
type Type = "string" | "number"
class Model {
   @CollectionOf(Type)
   property: Type[];
}
```

:::
