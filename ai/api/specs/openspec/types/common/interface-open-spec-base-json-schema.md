---
title: OpenSpecBaseJsonSchema from @tsed/openspec
description: api documentation of OpenSpecBaseJsonSchema from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OpenSpecBaseJsonSchema interface
---
# OpenSpecBaseJsonSchema - @tsed/openspec

## Usage

```typescript
import { OpenSpecBaseJsonSchema } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/common/OpenSpecJsonSchema.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/common/OpenSpecJsonSchema.ts#L0-L0).

## Overview

```ts
interface OpenSpecBaseJsonSchema {
    $ref?: string;
    title?: string;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: boolean;
    minimum?: number;
    exclusiveMinimum?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    enum?: any[];
    description?: string;
    default?: any;
    format?: string;
    type?: OpenSpecTypes;
}
```

<!-- Members -->

## $ref

```ts
$ref?: string;
```

## title

```ts
title?: string;
```

This attribute is a string that provides a short description of the instance property.

## multipleOf

```ts
multipleOf?: number;
```

Must be strictly greater than 0.
A numeric instance is valid only if division by this keyword's value results in an integer.

## maximum

```ts
maximum?: number;
```

Representing an inclusive upper limit for a numeric instance.
This keyword validates only if the instance is less than or exactly equal to "maximum".

## exclusiveMaximum

```ts
exclusiveMaximum?: boolean;
```

Representing an exclusive upper limit for a numeric instance.
This keyword validates only if the instance is strictly less than (not equal to) to "exclusiveMaximum".

## minimum

```ts
minimum?: number;
```

Representing an inclusive lower limit for a numeric instance.
This keyword validates only if the instance is greater than or exactly equal to "minimum".

## exclusiveMinimum

```ts
exclusiveMinimum?: boolean;
```

Representing an exclusive lower limit for a numeric instance.
This keyword validates only if the instance is strictly greater than (not equal to) to "exclusiveMinimum".

## maxLength

```ts
maxLength?: number;
```

Must be a non-negative integer.
A string instance is valid against this keyword if its length is less than, or equal to, the value of this keyword.

## minLength

```ts
minLength?: number;
```

Must be a non-negative integer.
A string instance is valid against this keyword if its length is greater than, or equal to, the value of this keyword.
Omitting this keyword has the same behavior as a value of 0.

## pattern

```ts
pattern?: string;
```

Should be a valid regular expression, according to the ECMA 262 regular expression dialect.

## maxItems

```ts
maxItems?: number;
```

Must be a non-negative integer.
An array instance is valid against "maxItems" if its size is less than, or equal to, the value of this keyword.

## minItems

```ts
minItems?: number;
```

Must be a non-negative integer.
An array instance is valid against "maxItems" if its size is greater than, or equal to, the value of this keyword.
Omitting this keyword has the same behavior as a value of 0.

## uniqueItems

```ts
uniqueItems?: boolean;
```

If this keyword has boolean value false, the instance validates successfully.
If it has boolean value true, the instance validates successfully if all of its elements are unique.
Omitting this keyword has the same behavior as a value of false.

## maxProperties

```ts
maxProperties?: number;
```

Must be a non-negative integer.
An object instance is valid against "maxProperties" if its number of properties is less than, or equal to, the value of this keyword.

## minProperties

```ts
minProperties?: number;
```

Must be a non-negative integer.
An object instance is valid against "maxProperties" if its number of properties is greater than,
or equal to, the value of this keyword.
Omitting this keyword has the same behavior as a value of 0.

## enum

```ts
enum?: any[];
```

This provides an enumeration of all possible values that are valid
for the instance property. This MUST be an array, and each item in
the array represents a possible value for the instance value. If
this attribute is defined, the instance value MUST be one of the
values in the array in order for the schema to be valid.

## description

```ts
description?: string;
```

This attribute is a string that provides a full description of the of purpose the instance property.

## default

```ts
default?: any;
```

This keyword can be used to supply a default JSON value associated with a particular schema.
It is RECOMMENDED that a default value be valid against the associated schema.

## format

```ts
format?: string;
```

## type

```ts
type?: OpenSpecTypes;
```

A single type, or a union of simple types
