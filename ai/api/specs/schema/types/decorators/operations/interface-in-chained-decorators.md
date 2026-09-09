---
title: InChainedDecorators from @tsed/schema
description: api documentation of InChainedDecorators from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation InChainedDecorators interface
---
# InChainedDecorators - @tsed/schema

## Usage

```typescript
import { InChainedDecorators } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/in.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/in.ts#L0-L0).

## Overview

```ts
interface InChainedDecorators {
    <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
    (target: Object, propertyKey: string | symbol, parameterIndex: number): void;
    (target: Function): void;
    Type(type: Type<any>): this;
    Name(name: string): this;
    Description(description: string): this;
    Required(required?: boolean): this;
    Pattern(pattern: string | RegExp): this;
    Schema(schema: Partial<JsonSchemaObject | JsonSchema>): this;
}
```

<!-- Members -->

##

```ts
<T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
```

##

```ts
(target: Object, propertyKey: string | symbol, parameterIndex: number): void;
```

##

```ts
(target: Function): void;
```

## Type

```ts
Type(type: Type<any>): this;
```

Type of this in parameter

## Name

```ts
Name(name: string): this;
```

## Description

```ts
Description(description: string): this;
```

## Required

```ts
Required(required?: boolean): this;
```

## Pattern

```ts
Pattern(pattern: string | RegExp): this;
```

Add pattern constraint. Only available for OPENAPI.

## Schema

```ts
Schema(schema: Partial<JsonSchemaObject | JsonSchema>): this;
```

Add custom schema.
