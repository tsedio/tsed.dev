---
title: Metadata from @tsed/core
description: api documentation of Metadata from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation Metadata class
---
# Metadata - @tsed/core

## Usage

```typescript
import { Metadata } from "@tsed/core";
```

> See [/packages/core/src/types/Metadata.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/types/Metadata.ts#L0-L0).

## Overview

```ts
class Metadata {
    static get(key: string, target: any, propertyKey?: string | symbol): any;
    static getOwn(key: string, target: any, propertyKey?: string | symbol): any;
    static getType(target: Object, propertyKey?: string | symbol): any;
    static getOwnType(target: Object, propertyKey?: string | symbol): any;
    static getReturnType(target: Object, propertyKey?: string | symbol): any;
    static getOwnReturnType(target: Object, propertyKey?: string | symbol): any;
    static has(key: string, target: any, propertyKey?: string | symbol): boolean;
    static hasOwn(key: string, target: any, propertyKey?: string | symbol): boolean;
    static delete(key: string, target: any, propertyKey?: string | symbol): boolean;
    static setParamTypes(target: any, propertyKey: string | symbol, value: any): void;
    static getTargetsFromPropertyKey: (metadataKey: string | symbol) => any[];
    static set(key: string, value: any, target: any, propertyKey?: string | symbol): void;
    static getParamTypes(targetPrototype: any, propertyKey?: string | symbol): any[];
    static getOwnParamTypes(target: Object, propertyKey?: string | symbol): any[];
}
```

<!-- Description -->

## Description

Static helper around `reflect-metadata` to read and write metadata on classes,
methods, properties and parameters.

This is the single entry point used across Ts.ED core to interact with
design-time type information (e.g. param types, return types) and custom
metadata keys. Only the exported class symbol is documented here per the
symbols-only rule; individual members are intentionally not described.

<!-- Members -->

## static get

```ts
static get(key: string, target: any, propertyKey?: string | symbol): any;
```

-   **key** (`string`): A key used to store and retrieve metadata.

-   **target** (`any`): The target object on which the metadata is defined.

-   **propertyKey** (`string` | `symbol`): Optional. The property key for the target.

Gets the metadata value for the provided metadata key on the target object or its prototype chain.

```typescript
class Example {
    // property declarations are not part of ES6, though they are valid in TypeScript:
    // static staticProperty;
    // property;

    static staticMethod(p) { }
    method(p) { }
}

// constructor
result = Metadata.get("custom:annotation", Example);

// property (on constructor)
result = Metadata.get("custom:annotation", Example, "staticProperty");

// property (on prototype)
result = Metadata.get("custom:annotation", Example.prototype, "property");

// method (on constructor)
result = Metadata.get("custom:annotation", Example, "staticMethod");

// method (on prototype)
result = Metadata.get("custom:annotation", Example.prototype, "method");
```

## static getOwn

```ts
static getOwn(key: string, target: any, propertyKey?: string | symbol): any;
```

-   **key** (`string`): A key used to store and retrieve metadata.

-   **target** (`any`): The target object on which the metadata is defined.

-   **propertyKey** (`string` | `symbol`): Optional. The property key for the target.

Gets the metadata value for the provided metadata key on the target object or its prototype chain.

```typescript
class Example {
    // property declarations are not part of ES6, though they are valid in TypeScript:
    // static staticProperty;
    // property;

    static staticMethod(p) { }
    method(p) { }
}

// constructor
result = Metadata.getOwn("custom:annotation", Example);

// property (on constructor)
result = Metadata.getOwn("custom:annotation", Example, "staticProperty");

// property (on prototype)
result = Metadata.getOwn("custom:annotation", Example.prototype, "property");

// method (on constructor)
result = Metadata.getOwn("custom:annotation", Example, "staticMethod");

// method (on prototype)
result = Metadata.getOwn("custom:annotation", Example.prototype, "method");
```

## static getType

```ts
static getType(target: Object, propertyKey?: string | symbol): any;
```

-   **target** (`Object`): The target object on which the metadata is defined.

-   **propertyKey** (`string` | `symbol`): Optional. The property key for the target.

Gets the metadata value for the provided metadata DESIGN_TYPE on the target object or its prototype chain.

```typescript
class Example {
    // property declarations are not part of ES6, though they are valid in TypeScript:
    // static staticProperty;
    // property;

    static staticMethod(p) { }
    method(p) { }
}

// on contructor
result = Metadata.getType(Example);

// property (on constructor)
result = Metadata.getType(Example, "staticProperty");

// method (on constructor)
result = Metadata.getType(Example, "staticMethod");
```

## static getOwnType

```ts
static getOwnType(target: Object, propertyKey?: string | symbol): any;
```

-   **target** (`Object`): The target object on which the metadata is defined.

-   **propertyKey** (`string` | `symbol`): Optional. The property key for the target.

Gets the metadata value for the provided metadata DESIGN_TYPE on the target object or its prototype chain.

```typescript
class Example {
    // property declarations are not part of ES6, though they are valid in TypeScript:
    // static staticProperty;
    // property;

    static staticMethod(p) { }
    method(p) { }
}

// on contructor
result = Metadata.getOwnType(Example);

// property (on constructor)
result = Metadata.getOwnType(Example, "staticProperty");

// method (on constructor)
result = Metadata.getOwnType(Example, "staticMethod");
```

## static getReturnType

```ts
static getReturnType(target: Object, propertyKey?: string | symbol): any;
```

-   **target** (`Object`): The target object on which the metadata is defined.

-   **propertyKey** (`string` | `symbol`): Optional. The property key for the target.

Gets the metadata value for the provided metadata DESIGN_RETURN_TYPE on the target object or its prototype chain.

```typescript
class Example {
    // property declarations are not part of ES6, though they are valid in TypeScript:
    // static staticProperty;
    // property;

    static staticMethod(p) { }
    method(p) { }
}

// on contructor
result = Metadata.getReturnType(Example);

// property (on constructor)
result = Metadata.getReturnType(Example, "staticProperty");

// method (on constructor)
result = Metadata.getReturnType(Example, "staticMethod");
```

## static getOwnReturnType

```ts
static getOwnReturnType(target: Object, propertyKey?: string | symbol): any;
```

-   **target** (`Object`): The target object on which the metadata is defined.

-   **propertyKey** (`string` | `symbol`): Optional. The property key for the target.

Gets the metadata value for the provided metadata DESIGN_RETURN_TYPE on the target object or its prototype chain.

```typescript
class Example {
    // property declarations are not part of ES6, though they are valid in TypeScript:
    // static staticProperty;
    // property;

    static staticMethod(p) { }
    method(p) { }
}

// on contructor
result = Metadata.getOwnReturnType(Example);

// property (on constructor)
result = Metadata.getOwnReturnType(Example, "staticProperty");

// method (on constructor)
result = Metadata.getOwnReturnType(Example, "staticMethod");
```

## static has

```ts
static has(key: string, target: any, propertyKey?: string | symbol): boolean;
```

-   **key** (`string`): A key used to store and retrieve metadata.

-   **target** (`any`): The target object on which the metadata is defined.

-   **propertyKey** (`string` | `symbol`): Optional. The property key for the target.

Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.

```typescript
class Example {
    // property declarations are not part of ES6, though they are valid in TypeScript:
    // static staticProperty;
    // property;

    static staticMethod(p) { }
    method(p) { }
}

// constructor
result = Metadata.has("custom:annotation", Example);

// property (on constructor)
result = Metadata.has("custom:annotation", Example, "staticProperty");

// property (on prototype)
result = Metadata.has("custom:annotation", Example.prototype, "property");

// method (on constructor)
result = Metadata.has("custom:annotation", Example, "staticMethod");

// method (on prototype)
result = Metadata.has("custom:annotation", Example.prototype, "method");
```

## static hasOwn

```ts
static hasOwn(key: string, target: any, propertyKey?: string | symbol): boolean;
```

-   **key** (`string`): A key used to store and retrieve metadata.

-   **target** (`any`): The target object on which the metadata is defined.

-   **propertyKey** (`string` | `symbol`): Optional. The property key for the target.

Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.

```typescript
class Example {
    // property declarations are not part of ES6, though they are valid in TypeScript:
    // static staticProperty;
    // property;

    static staticMethod(p) { }
    method(p) { }
}

// constructor
result = Metadata.has("custom:annotation", Example);

// property (on constructor)
result = Metadata.hasOwn("custom:annotation", Example, "staticProperty");

// property (on prototype)
result = Metadata.hasOwn("custom:annotation", Example.prototype, "property");

// method (on constructor)
result = Metadata.hasOwn("custom:annotation", Example, "staticMethod");

// method (on prototype)
result = Metadata.hasOwn("custom:annotation", Example.prototype, "method");
```

## static delete

```ts
static delete(key: string, target: any, propertyKey?: string | symbol): boolean;
```

-   **key** (`string`): A key used to store and retrieve metadata.

-   **target** (`any`): The target object on which the metadata is defined.

-   **propertyKey** (`string` | `symbol`): Optional. The property key for the target.

Deletes the metadata entry from the target object with the provided key.

```typescript
class Example {
    // property declarations are not part of ES6, though they are valid in TypeScript:
    // static staticProperty;
    // property;

    static staticMethod(p) { }
    method(p) { }
}

// constructor
result = Metadata.delete("custom:annotation", Example);

// property (on constructor)
result = Metadata.delete("custom:annotation", Example, "staticProperty");

// property (on prototype)
result = Metadata.delete("custom:annotation", Example.prototype, "property");

// method (on constructor)
result = Metadata.delete("custom:annotation", Example, "staticMethod");

// method (on prototype)
result = Metadata.delete("custom:annotation", Example.prototype, "method");
```

## static setParamTypes

```ts
static setParamTypes(target: any, propertyKey: string | symbol, value: any): void;
```

-   **target** (`any`): The target object on which the metadata is defined.

-   **propertyKey** (`string` | `symbol`): The property key for the target.

-   **value** (`any`): A value that contains attached metadata.

Set the metadata value for the provided metadata DESIGN_PARAM_TYPES on the target object or its prototype chain.

```typescript
class Example {
    // property declarations are not part of ES6, though they are valid in TypeScript:
    // static staticProperty;
    // property;

    static staticMethod(p) { }
    method(p) { }
}

// on contructor
result = Metadata.setParamTypes(Example, undefined, [Object]);

// property (on constructor)
result = Metadata.setParamTypes(Example, "staticProperty", [Object]);

// property (on prototype)
result = Metadata.setParamTypes(Example.prototype, "property", [Object]);

// method (on constructor)
result = Metadata.setParamTypes(Example, "staticMethod", [Object]);

// method (on prototype)
result = Metadata.setParamTypes(Example.prototype, "method", [Object]);
```

## static getTargetsFromPropertyKey:

```ts
static getTargetsFromPropertyKey: (metadataKey: string | symbol) => any[];
```

Get all metadata for a metadataKey.

## static set

```ts
static set(key: string, value: any, target: any, propertyKey?: string | symbol): void;
```

-   **key** (`string`): A key used to store and retrieve metadata.

-   **value** (`any`): A value that contains attached metadata.

-   **target** (`any`): The target object on which to define metadata.

-   **propertyKey** (`string` | `symbol`): Optional. The property key for the target.

Define a unique metadata entry on the target.

```typescript
class Example {
    // property declarations are not part of ES6, though they are valid in TypeScript:
    // static staticProperty;
    // property;

    static staticMethod(p) { }
    method(p) { }
}

// constructor
Reflect.defineMetadata("custom:annotation", options, Example);

// property (on constructor)
Reflect.defineMetadata("custom:annotation", Number, Example, "staticProperty");

// property (on prototype)
Reflect.defineMetadata("custom:annotation", Number, Example.prototype, "property");

// method (on constructor)
Reflect.defineMetadata("custom:annotation", Number, Example, "staticMethod");

// method (on prototype)
Reflect.defineMetadata("custom:annotation", Number, Example.prototype, "method");

// decorator factory as metadata-producing annotation.
function MyAnnotation(options): PropertyDecorator {
    return (target, key) => Reflect.defineMetadata("custom:annotation", options, target, key);
}
```

## static getParamTypes

```ts
static getParamTypes(targetPrototype: any, propertyKey?: string | symbol): any[];
```

-   **propertyKey** (`string` | `symbol`): Optional. The property key for the target.

Gets the metadata value for the provided metadata DESIGN_PARAM_TYPES on the target object or its prototype chain.

```typescript
class Example {
    // property declarations are not part of ES6, though they are valid in TypeScript:
    // static staticProperty;
    // property;

    static staticMethod(p) { }
    method(p) { }
}

// on contructor
result = Metadata.getParamTypes(Example.prototype);

// property (on constructor)
result = Metadata.getParamTypes(Example.prototype, "staticProperty");

// method (on constructor)
result = Metadata.getParamTypes(Example.prototype, "staticMethod");
```

## static getOwnParamTypes

```ts
static getOwnParamTypes(target: Object, propertyKey?: string | symbol): any[];
```

-   **target** (`Object`): The target object on which the metadata is defined.

-   **propertyKey** (`string` | `symbol`): Optional. The property key for the target.

Gets the metadata value for the provided metadata DESIGN_PARAM_TYPES on the target object or its prototype chain.

```typescript
class Example {
    // property declarations are not part of ES6, though they are valid in TypeScript:
    // static staticProperty;
    // property;

    static staticMethod(p) { }
    method(p) { }
}

// on contructor
result = Metadata.getParamTypes(Example);

// property (on constructor)
result = Metadata.getParamTypes(Example, "staticProperty");

// method (on constructor)
result = Metadata.getParamTypes(Example, "staticMethod");
```
