---
title: RouteChainedDecorators from @tsed/schema
description: api documentation of RouteChainedDecorators from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation RouteChainedDecorators interface
---
# RouteChainedDecorators - @tsed/schema

## Usage

```typescript
import { RouteChainedDecorators } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/operation.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/operation.ts#L0-L0).

## Overview

```ts
interface RouteChainedDecorators {
    <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
    Path(string: string): this;
    Method(method: OperationVerbs | string): this;
    Id(id: string): this;
    Name(name: string): this;
    Description(description: string): this;
    Summary(Summary: string): this;
    Use(...args: any[]): this;
    UseAfter(...args: any[]): this;
    UseBefore(...args: any[]): this;
}
```

<!-- Members -->

##

```ts
<T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
```

## Path

```ts
Path(string: string): this;
```

## Method

```ts
Method(method: OperationVerbs | string): this;
```

Set the operation method

## Id

```ts
Id(id: string): this;
```

Set the operation id

## Name

```ts
Name(name: string): this;
```

Set the operation id

## Description

```ts
Description(description: string): this;
```

## Summary

```ts
Summary(Summary: string): this;
```

Summary

## Use

```ts
Use(...args: any[]): this;
```

## UseAfter

```ts
UseAfter(...args: any[]): this;
```

## UseBefore

```ts
UseBefore(...args: any[]): this;
```
