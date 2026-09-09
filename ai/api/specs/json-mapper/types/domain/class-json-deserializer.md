---
title: JsonDeserializer from @tsed/json-mapper
description: api documentation of JsonDeserializer from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation JsonDeserializer class
---
# JsonDeserializer - @tsed/json-mapper

## Usage

```typescript
import { JsonDeserializer } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/domain/JsonDeserializer.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/domain/JsonDeserializer.ts#L0-L0).

## Overview

```ts
class JsonDeserializer extends JsonMapperCompiler<JsonDeserializerOptions> {
    protected constructors: Record<string, Type<any>>;
    constructor();
    map<Model = any>(input: any, options?: JsonDeserializerOptions): Model;
    compile(model: Type<any>, groups: false | string[]): CachedJsonMapper<JsonDeserializerOptions>;
    compileMapper(mapper: string, { id, groupsId, model, storeGroups }: {
        id: string;
        model: Type<any> | string;
        groupsId: string;
        storeGroups: CachedGroupsJsonMapper<JsonDeserializerOptions>;
    }): CachedJsonMapper<JsonDeserializerOptions>;
    protected newInstanceOf(id: string, obj: any, options: any): any;
    protected createMapper(model: Type<any>, id: string, groups: false | string[]): string;
    protected alterValue(schemaId: string, value: any, options: JsonDeserializerOptions): any;
    
    
    
    
    
    
}
```

<!-- Description -->

## Description

Deserializes raw JSON data into class instances based on schema metadata,
handling collections, discriminators, hooks, and registered type mappers.

<!-- Members -->

## Constructor

```ts
protected constructors: Record<string, Type<any>>;
```

Cached classes by his id

## map

```ts
map<Model = any>(input: any, options?: JsonDeserializerOptions): Model;
```

## compile

```ts
compile(model: Type<any>, groups: false | string[]): CachedJsonMapper<JsonDeserializerOptions>;
```

## compileMapper

```ts
compileMapper(mapper: string, { id, groupsId, model, storeGroups }: {
     id: string;
     model: Type<any> | string;
     groupsId: string;
     storeGroups: CachedGroupsJsonMapper<JsonDeserializerOptions>;
 }): CachedJsonMapper<JsonDeserializerOptions>;
```

## protected newInstanceOf

```ts
protected newInstanceOf(id: string, obj: any, options: any): any;
```

## protected createMapper

```ts
protected createMapper(model: Type<any>, id: string, groups: false | string[]): string;
```

## protected alterValue

```ts
protected alterValue(schemaId: string, value: any, options: JsonDeserializerOptions): any;
```
