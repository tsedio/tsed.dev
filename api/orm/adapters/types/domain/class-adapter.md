---
url: /api/orm/adapters/types/domain/class-adapter.md
description: api documentation of Adapter from @tsed/adapters
---

## Usage

```typescript
import { Adapter } from "@tsed/adapters";
```

> See [/packages/orm/adapters/src/domain/Adapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters/src/domain/Adapter.ts#L0-L0).

## Overview

```ts
abstract class Adapter<Model = any> {
    readonly model: Type<Model> | Object;
    readonly collectionName: string;
    readonly indexes: {
        propertyKey: string;
        options: any;
    }[];
    readonly useAlias: boolean;
    protected ajvService: AjvService;
    constructor(options: AdapterConstructorOptions);
    validate(value: Model): Promise<void>;
    abstract create(value: Partial<Omit<Model, "_id">>, expiresAt?: Date): Promise<Model>;
    abstract update(id: string, value: Model, expiresAt?: Date): Promise<Model | undefined>;
    abstract updateOne(predicate: Partial<Model>, value: Partial<Model>, expiresAt?: Date): Promise<Model | undefined>;
    abstract upsert(id: string, value: Model, expiresAt?: Date): Promise<Model>;
    abstract findOne(predicate: Partial<Model>): Promise<Model | undefined>;
    abstract findById(id: string): Promise<Model | undefined>;
    abstract findAll(predicate?: Partial<Model>): Promise<Model[]>;
    abstract deleteOne(predicate: Partial<Model>): Promise<Model | undefined>;
    abstract deleteMany(predicate: Partial<Model>): Promise<Model[]>;
    abstract deleteById(id: string): Promise<Model | undefined>;
    getModel(): Object | undefined;
    protected deserialize(obj: any, opts?: JsonDeserializerOptions): any;
    protected serialize(obj: any, opts?: JsonSerializerOptions): any;
}
```

## readonly model

```ts
readonly model: Type<Model> | Object;
```

## readonly collectionName

```ts
readonly collectionName: string;
```

## readonly indexes

```ts
readonly indexes: {
     propertyKey: string;
     options: any;
 }[];
```

## readonly useAlias

```ts
readonly useAlias: boolean;
```

## protected ajvService

```ts
protected ajvService: AjvService;
```

## validate

```ts
validate(value: Model): Promise<void>;
```

## abstract create

```ts
abstract create(value: Partial<Omit<Model, "_id">>, expiresAt?: Date): Promise<Model>;
```

## abstract update

```ts
abstract update(id: string, value: Model, expiresAt?: Date): Promise<Model | undefined>;
```

## abstract updateOne

```ts
abstract updateOne(predicate: Partial<Model>, value: Partial<Model>, expiresAt?: Date): Promise<Model | undefined>;
```

## abstract upsert

```ts
abstract upsert(id: string, value: Model, expiresAt?: Date): Promise<Model>;
```

## abstract findOne

```ts
abstract findOne(predicate: Partial<Model>): Promise<Model | undefined>;
```

## abstract findById

```ts
abstract findById(id: string): Promise<Model | undefined>;
```

## abstract findAll

```ts
abstract findAll(predicate?: Partial<Model>): Promise<Model[]>;
```

## abstract deleteOne

```ts
abstract deleteOne(predicate: Partial<Model>): Promise<Model | undefined>;
```

## abstract deleteMany

```ts
abstract deleteMany(predicate: Partial<Model>): Promise<Model[]>;
```

## abstract deleteById

```ts
abstract deleteById(id: string): Promise<Model | undefined>;
```

## getModel

```ts
getModel(): Object | undefined;
```

## protected deserialize

```ts
protected deserialize(obj: any, opts?: JsonDeserializerOptions): any;
```

## protected serialize

```ts
protected serialize(obj: any, opts?: JsonSerializerOptions): any;
```
