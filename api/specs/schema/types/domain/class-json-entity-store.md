---
url: /api/specs/schema/types/domain/class-json-entity-store.md
description: api documentation of JsonEntityStore from @tsed/schema
---

## Usage

```typescript
import { JsonEntityStore } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonEntityStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonEntityStore.ts#L0-L0).

## Overview

```ts
abstract class JsonEntityStore implements JsonEntityStoreOptions {
    readonly propertyKey: string | symbol;
    readonly propertyName: string;
    readonly index: number;
    readonly descriptor: PropertyDescriptor;
    readonly decoratorType: DecoratorTypes;
    token: Type<any>;
    readonly store: Store;
    readonly isStore = true;
    readonly parent: JsonEntityStore;
    readonly target: Type<any>;
    [key: string]: any;
    constructor(options: JsonEntityStoreOptions);
    
    get collectionType(): Type<any> | undefined;
    set collectionType(value: Type<any>);
    protected _type: Type<any>;
    get type(): Type<any> | any;
    set type(value: Type<any> | any);
    protected _schema: JsonSchema;
    get schema(): JsonSchema;
    get targetName(): string;
    get isCollection(): boolean;
    get isArray(): boolean;
    get discriminatorAncestor(): JsonEntityStore | undefined;
    get isPrimitive(): boolean;
    get isDate(): boolean;
    get isObject(): boolean;
    get isClass(): boolean;
    get computedType(): Type<any>;
    get itemSchema(): JsonSchema;
    get parentSchema(): JsonSchema;
    get isDiscriminatorChild(): boolean;
    get path(): string;
    set path(path: string);
    isGetterOnly(): boolean | undefined;
    get<T = any>(key: string, defaultValue?: any): T;
    set(key: string, value?: any): Store;
    toString(): string;
    getBestType(): any;
    is(input: DecoratorTypes.CLASS): this is JsonClassStore;
    is(input: DecoratorTypes.PROP): this is JsonPropertyStore;
    is(input: DecoratorTypes.METHOD): this is JsonMethodStore;
    is(input: DecoratorTypes.PARAM): this is JsonParameterStore;
    abstract build(): void;
    protected buildType(type: any): void;
}
```

## Description

Base class for storing metadata about decorated entities (classes, properties, methods, parameters).

JsonEntityStore is the foundation of Ts.ED's metadata system, managing schema information
and type metadata for decorated entities. It serves as the parent class for specialized
stores (JsonClassStore, JsonPropertyStore, JsonMethodStore, JsonParameterStore).

### Entity Types

Different decorator types create different store subclasses:

* **Class decorators**: Create JsonClassStore instances
* **Property decorators**: Create JsonPropertyStore instances
* **Method decorators**: Create JsonMethodStore instances
* **Parameter decorators**: Create JsonParameterStore instances

### Key Responsibilities

* **Schema Management**: Each store maintains a JsonSchema for the decorated entity
* **Type Resolution**: Resolves TypeScript types, including collections and generics
* **Metadata Storage**: Stores decorator metadata using Ts.ED's Store system
* **Inheritance**: Manages parent-child relationships between entities

### Usage

Stores are typically accessed via static `from()` methods:

```typescript
// Get store for a class
const classStore = getJsonEntityStore(MyClass);

// Get store for a property
const propStore = getJsonEntityStore(MyClass, "propertyName");

// Get store for a method parameter
const paramStore = getJsonEntityStore(MyClass, "methodName", 0);
```

### Architecture

The store system creates a hierarchical structure:

* ClassStore contains PropertyStore and MethodStore children
* MethodStore contains ParameterStore children
* Each store has an associated JsonSchema

## readonly propertyKey

```ts
readonly propertyKey: string | symbol;
```

Original property key decorated by the decorator

## readonly propertyName

```ts
readonly propertyName: string;
```

Alias of the property

## readonly index

```ts
readonly index: number;
```

Parameter index

## readonly descriptor

```ts
readonly descriptor: PropertyDescriptor;
```

Method's descriptor

## readonly decoratorType

```ts
readonly decoratorType: DecoratorTypes;
```

Decorator type used to the JsonSchemaStore.

## token

```ts
token: Type<any>;
```

## readonly store

```ts
readonly store: Store;
```

## readonly isStore

```ts
readonly isStore = true;
```

## readonly parent

```ts
readonly parent: JsonEntityStore;
```

## readonly target

```ts
readonly target: Type<any>;
```

## \[key: string]

```ts
[key: string]: any;
```

## get collectionType

```ts
get collectionType(): Type<any> | undefined;
```

Type of the collection (Array, Map, Set, etc...)

## set collectionType

```ts
set collectionType(value: Type<any>);
```

## protected \_type

```ts
protected _type: Type<any>;
```

## get type

```ts
get type(): Type<any> | any;
```

## set type

```ts
set type(value: Type<any> | any);
```

Get original type without transformation

## protected \_schema

```ts
protected _schema: JsonSchema;
```

Ref to JsonSchema

## get schema

```ts
get schema(): JsonSchema;
```

Return the JsonSchema

## get targetName

```ts
get targetName(): string;
```

Return the class name of the entity.

## get isCollection

```ts
get isCollection(): boolean;
```

## get isArray

```ts
get isArray(): boolean;
```

## get discriminatorAncestor

```ts
get discriminatorAncestor(): JsonEntityStore | undefined;
```

## get isPrimitive

```ts
get isPrimitive(): boolean;
```

## get isDate

```ts
get isDate(): boolean;
```

## get isObject

```ts
get isObject(): boolean;
```

## get isClass

```ts
get isClass(): boolean;
```

## get computedType

```ts
get computedType(): Type<any>;
```

Return the itemSchema computed type. if the type is a function used for recursive model, the function will be called to
get the right type.

## get itemSchema

```ts
get itemSchema(): JsonSchema;
```

## get parentSchema

```ts
get parentSchema(): JsonSchema;
```

## get isDiscriminatorChild

```ts
get isDiscriminatorChild(): boolean;
```

## get path

```ts
get path(): string;
```

## set path

```ts
set path(path: string);
```

## isGetterOnly

```ts
isGetterOnly(): boolean | undefined;
```

## get

```ts
get<T = any>(key: string, defaultValue?: any): T;
```

## set

```ts
set(key: string, value?: any): Store;
```

## toString

```ts
toString(): string;
```

## getBestType

```ts
getBestType(): any;
```

## is

```ts
is(input: DecoratorTypes.CLASS): this is JsonClassStore;
```

## is

```ts
is(input: DecoratorTypes.PROP): this is JsonPropertyStore;
```

## is

```ts
is(input: DecoratorTypes.METHOD): this is JsonMethodStore;
```

## is

```ts
is(input: DecoratorTypes.PARAM): this is JsonParameterStore;
```

## abstract build

```ts
abstract build(): void;
```

## protected buildType

```ts
protected buildType(type: any): void;
```
