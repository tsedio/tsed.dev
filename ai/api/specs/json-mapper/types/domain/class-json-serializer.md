---
title: JsonSerializer from @tsed/json-mapper
description: api documentation of JsonSerializer from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation JsonSerializer class
---
# JsonSerializer - @tsed/json-mapper

## Usage

```typescript
import { JsonSerializer } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/domain/JsonSerializer.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/domain/JsonSerializer.ts#L0-L0).

## Overview

```ts
class JsonSerializer extends JsonMapperCompiler<JsonSerializerOptions> {
    constructor();
    map(input: any, options?: JsonSerializerOptions): any;
    protected alterValue(schemaId: string, value: any, options: JsonSerializerOptions): any;
    protected createMapper(model: Type<any>, id: string, groups: false | string[]): string;
    
    
    
    
    
    
}
```

<!-- Description -->

## Description

Serializes data structures according to the metadata captured by `@tsed/schema`.

The serializer walks entity schemas, applies hooks, honors alias/group rules, and falls back to the
registered type mappers (e.g., components in `src/components`).

<!-- Members -->

## map

```ts
map(input: any, options?: JsonSerializerOptions): any;
```

## protected alterValue

```ts
protected alterValue(schemaId: string, value: any, options: JsonSerializerOptions): any;
```

## protected createMapper

```ts
protected createMapper(model: Type<any>, id: string, groups: false | string[]): string;
```
