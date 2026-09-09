---
title: ReturnsChainedDecorators from @tsed/schema
description: api documentation of ReturnsChainedDecorators from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation ReturnsChainedDecorators interface
---
# ReturnsChainedDecorators - @tsed/schema

## Usage

```typescript
import { ReturnsChainedDecorators } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/returns.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/returns.ts#L0-L0).

## Overview

```ts
interface ReturnsChainedDecorators {
    <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
    (target: Function): void;
    ContentType(value: string): this;
    Description(description: string): this;
    Examples(examples: Record<string, OS3Example>): this;
    Examples(examples: Record<string, any>): this;
    Examples(examples: any): this;
    Type(type: Type<any> | any): this;
    Status(status: string | number): this;
    Of(...types: GenericValue[]): this;
    OfInteger(): this;
    OneOf(...types: GenericValue[]): this;
    AllOf(...types: GenericValue[]): this;
    AnyOf(...types: GenericValue[]): this;
    Nested(...generics: GenericValue[]): this;
    Header(key: string, value?: number | string | (JsonHeader & {
        value?: string | number | boolean;
    })): this;
    Headers(headers: JsonHeaders): this;
    Location(location: string, meta?: JsonHeader): this;
    Schema<T>(schema: Partial<JsonSchemaObject> | JsonSchema<T>): this;
    Title(title: string): this;
    Label(label: string): this;
    Groups(...groups: string[]): this;
    Groups(groupName: string, groups: string[]): this;
    AllowedGroups(...allowedGroups: string[]): this;
    Binary(): this;
    [key: string]: any;
}
```

<!-- Members -->

##

```ts
<T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
```

##

```ts
(target: Function): void;
```

## ContentType

```ts
ContentType(value: string): this;
```

Set a Content-Type for the current response

## Description

```ts
Description(description: string): this;
```

Add a description

## Examples

```ts
Examples(examples: Record<string, OS3Example>): this;
```

Add examples

## Examples

```ts
Examples(examples: Record<string, any>): this;
```

## Examples

```ts
Examples(examples: any): this;
```

## Type

```ts
Type(type: Type<any> | any): this;
```

Change the model type

## Status

```ts
Status(status: string | number): this;
```

Change the status

## Of

```ts
Of(...types: GenericValue[]): this;
```

Add the nested types

## OfInteger

```ts
OfInteger(): this;
```

For the integer type

## OneOf

```ts
OneOf(...types: GenericValue[]): this;
```

Add the nested types

## AllOf

```ts
AllOf(...types: GenericValue[]): this;
```

Add the nested types

## AnyOf

```ts
AnyOf(...types: GenericValue[]): this;
```

Add the nested types

## Nested

```ts
Nested(...generics: GenericValue[]): this;
```

Declare a nested generic models

## Header

```ts
Header(key: string, value?: number | string | (JsonHeader & {
     value?: string | number | boolean;
 })): this;
```

Add header.

## Headers

```ts
Headers(headers: JsonHeaders): this;
```

Add headers

## Location

```ts
Location(location: string, meta?: JsonHeader): this;
```

Add location hea

## Schema

```ts
Schema<T>(schema: Partial<JsonSchemaObject> | JsonSchema<T>): this;
```

Assign partial schema

## Title

```ts
Title(title: string): this;
```

Add an inline title for the return model.

## Label

```ts
Label(label: string): this;
```

## Groups

```ts
Groups(...groups: string[]): this;
```

Use group to filter model

## Groups

```ts
Groups(groupName: string, groups: string[]): this;
```

## AllowedGroups

```ts
AllowedGroups(...allowedGroups: string[]): this;
```

Add a list of allowed groups to filter dynamically fields. Listed groups can be used by the consumer to change
the mapped response.

## Binary

```ts
Binary(): this;
```

Apply the application/octet-stream and binary format on Open API documentation

## \[key: string]

```ts
[key: string]: any;
```
