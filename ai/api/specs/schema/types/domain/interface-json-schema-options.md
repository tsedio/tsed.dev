---
title: JsonSchemaOptions from @tsed/schema
description: api documentation of JsonSchemaOptions from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation JsonSchemaOptions interface
---
# JsonSchemaOptions - @tsed/schema

## Usage

```typescript
import { JsonSchemaOptions } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonSchemaOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonSchemaOptions.ts#L0-L0).

## Overview

```ts
interface JsonSchemaOptions {
    useAlias?: boolean;
    components?: Record<string, any>;
    specType?: SpecTypes;
    specVersion?: string;
    groups?: string[] | false;
    groupsName?: string;
    customKeys?: boolean;
    inlineEnums?: boolean;
    inlineRefs?: boolean;
    generics?: GenericsMap;
    [key: string]: any;
}
```

<!-- Description -->

## Description

Configuration options for JSON schema generation.

These options control how JSON schemas are generated from TypeScript classes,
including alias mapping, component references, spec type selection, group filtering,
and custom key generation. The options affect both JSON Schema and OpenAPI
specification generation.

### Usage

```typescript
import {compile, JsonSchemaOptions} from "@tsed/schema";

const options: JsonSchemaOptions = {
  specType: SpecTypes.OPENAPI,
  specVersion: "3.0.3",
  groups: ["public"],
  useAlias: true,
  customKeys: true
};

const schema = compile(MyModel, options);
```

<!-- Members -->

## useAlias

```ts
useAlias?: boolean;
```

Map properties with the alias name. By default, false

## components

```ts
components?: Record<string, any>;
```

Reference to components Object.

## specType

```ts
specType?: SpecTypes;
```

Define Spec types level

## specVersion

```ts
specVersion?: string;
```

Define the spec version for OPENAPI (3.1.0, 3.0.3, 3.0.2, 3.0.1, 3.0.0)

## groups

```ts
groups?: string[] | false;
```

Define a group restriction to generate the JsonSchema.
Set false to disable groups.

## groupsName

```ts
groupsName?: string;
```

Set the postfix groups name for a generated model and ref.

## customKeys

```ts
customKeys?: boolean;
```

Generate custom keys when SpecType is JSON.

## inlineEnums

```ts
inlineEnums?: boolean;
```

Inline enums when enum instead of using $ref.

## inlineRefs

```ts
inlineRefs?: boolean;
```

Inline resolvable local JSON Schema references in the compiled output.

External references and circular local references are preserved.

## generics

```ts
generics?: GenericsMap;
```

Explicit generic bindings used during schema compilation.

Prefer attaching generics directly to a local schema instance with the
functional API:

```typescript
from(Pagination).genericOf(Product)
generic(Pagination).of(Product)
```

`options.generics` remains useful for low-level compilation flows where the
generic bindings must be supplied externally, for example when compiling a
shared class schema. When both are provided, the generics carried by the
`JsonSchema` instance take precedence over `options.generics`.

## \[key: string]

```ts
[key: string]: any;
```
