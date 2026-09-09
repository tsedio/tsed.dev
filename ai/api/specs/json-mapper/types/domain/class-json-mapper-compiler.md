---
title: JsonMapperCompiler from @tsed/json-mapper
description: api documentation of JsonMapperCompiler from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation JsonMapperCompiler class
---
# JsonMapperCompiler - @tsed/json-mapper

## Usage

```typescript
import { JsonMapperCompiler } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/domain/JsonMapperCompiler.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/domain/JsonMapperCompiler.ts#L0-L0).

## Overview

```ts
abstract class JsonMapperCompiler<Options extends Record<string, any> = any> {
    protected cache: Map<string | Type<any>, CachedGroupsJsonMapper<Options>>;
    protected mappers: Record<string, JsonMapperCallback<Options>>;
    protected schemes: Record<string, any>;
    protected constructors: Record<string, Type<any>>;
    protected globals: Record<string, any>;
    constructor();
    addTypeMapper(model: Type<any> | string, fn: any): this;
    removeTypeMapper(model: Type<any> | string): void;
    addGlobal(key: string, value: any): this;
    compileMapper(mapper: string, { id, groupsId, storeGroups }: {
        id: string;
        groupsId: string;
        model: Type<any> | string;
        storeGroups: CachedGroupsJsonMapper<Options>;
    }): CachedJsonMapper<Options>;
    createContext(options: Options): Options & {
        cache: Map<string | Type<any>, CachedGroupsJsonMapper<Options>>;
    };
    compile(model: Type<any> | string, groups: false | string[], opts?: {
        mapper?: any;
    }): CachedJsonMapper<Options>;
    protected execMapper(id: string, value: any, options: Options): any;
    protected abstract map(input: any, options: Options): any;
    protected abstract alterValue(schemaId: string, value: any, options: Options): any;
    protected abstract createMapper(model: Type<any>, id: string, groups: false | string[]): string;
    protected getType(model: Type<any>): Type<any> | MapConstructor | ObjectConstructor | ArrayConstructor | SetConstructor;
    protected alterIgnore(id: string, options: Options): any;
    protected alterGroups(schema: JsonSchema, groups: false | string[]): boolean;
    protected getGroupsId(groups: false | string[]): string;
    protected getId(model: Type<any> | string, groupsId: string): string;
    protected getSchemaId(id: string, propertyKey: string): string;
}
```

<!-- Description -->

## Description

Base compiler that turns schema metadata into executable (de)serialization functions.
Subclasses supply `map`, `alterValue`, and `createMapper` implementations to specialize
the pipeline for serialization or deserialization.

<!-- Members -->

## Constructor

```ts
protected constructors: Record<string, Type<any>>;
```

Cached classes by his id

## protected cache

```ts
protected cache: Map<string | Type<any>, CachedGroupsJsonMapper<Options>>;
```

Cached mappers metadata

## protected mappers

```ts
protected mappers: Record<string, JsonMapperCallback<Options>>;
```

Cached executable mappers by his id

## protected schemes

```ts
protected schemes: Record<string, any>;
```

Cached schemas

## protected globals

```ts
protected globals: Record<string, any>;
```

Global variables available in the mapper

## addTypeMapper

```ts
addTypeMapper(model: Type<any> | string, fn: any): this;
```

## removeTypeMapper

```ts
removeTypeMapper(model: Type<any> | string): void;
```

## addGlobal

```ts
addGlobal(key: string, value: any): this;
```

## compileMapper

```ts
compileMapper(mapper: string, { id, groupsId, storeGroups }: {
     id: string;
     groupsId: string;
     model: Type<any> | string;
     storeGroups: CachedGroupsJsonMapper<Options>;
 }): CachedJsonMapper<Options>;
```

## createContext

```ts
createContext(options: Options): Options & {
     cache: Map<string | Type<any>, CachedGroupsJsonMapper<Options>>;
 };
```

## compile

```ts
compile(model: Type<any> | string, groups: false | string[], opts?: {
     mapper?: any;
 }): CachedJsonMapper<Options>;
```

## protected execMapper

```ts
protected execMapper(id: string, value: any, options: Options): any;
```

## protected abstract map

```ts
protected abstract map(input: any, options: Options): any;
```

## protected abstract alterValue

```ts
protected abstract alterValue(schemaId: string, value: any, options: Options): any;
```

## protected abstract createMapper

```ts
protected abstract createMapper(model: Type<any>, id: string, groups: false | string[]): string;
```

## protected getType

```ts
protected getType(model: Type<any>): Type<any> | MapConstructor | ObjectConstructor | ArrayConstructor | SetConstructor;
```

## protected alterIgnore

```ts
protected alterIgnore(id: string, options: Options): any;
```

## protected alterGroups

```ts
protected alterGroups(schema: JsonSchema, groups: false | string[]): boolean;
```

## protected getGroupsId

```ts
protected getGroupsId(groups: false | string[]): string;
```

## protected getId

```ts
protected getId(model: Type<any> | string, groupsId: string): string;
```

## protected getSchemaId

```ts
protected getSchemaId(id: string, propertyKey: string): string;
```
