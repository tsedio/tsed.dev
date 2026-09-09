---
title: UnionToIntersection from @tsed/schema
description: api documentation of UnionToIntersection from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation UnionToIntersection type
---
# UnionToIntersection - @tsed/schema

## Usage

```typescript
import { UnionToIntersection } from "@tsed/specs/schema/src/domain/types";
```

> See [/packages/specs/schema/src/domain/types.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/types.ts#L0-L0).

## Overview

```ts
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
```

<!-- Description -->

## Description

Converts a union type to an intersection type.

This advanced TypeScript utility transforms a union of types (A | B | C) into
an intersection of types (A & B & C), which is useful for schema composition
and merging operations.

### Usage

```typescript
type Union = { a: string } | { b: number };
type Intersection = UnionToIntersection<Union>;
// Result: { a: string } & { b: number }
```
