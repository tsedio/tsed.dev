---
url: /api/specs/openspec/types/common/interface-open-spec-json-schema.md
description: api documentation of OpenSpecJsonSchema from @tsed/openspec
---

## Usage

```typescript
import { OpenSpecJsonSchema } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/common/OpenSpecJsonSchema.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/common/OpenSpecJsonSchema.ts#L0-L0).

## Overview

```ts
interface OpenSpecJsonSchema<Schema = any> extends OpenSpecBaseJsonSchema {
    items?: Schema | OpenSpecRef;
    required?: string[];
    additionalProperties?: Schema | boolean;
    properties?: OpenSpecHash<Schema>;
    allOf?: (Schema | OpenSpecRef)[];
    example?: any;
}
```

## items

```ts
items?: Schema | OpenSpecRef;
```

Required if type is "array". Describes the type of items in the array.

## required

```ts
required?: string[];
```

A free-form property to include an example of an instance for this schema.

## additionalProperties

```ts
additionalProperties?: Schema | boolean;
```

Value can be boolean or object. Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema.

## properties

```ts
properties?: OpenSpecHash<Schema>;
```

Property definitions MUST be a Schema Object and not a standard JSON Schema (inline or referenced).

## allOf:

```ts
allOf?: (Schema | OpenSpecRef)[];
```

Inline or referenced schema MUST be of a [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#schemaObject) and not a standard JSON Schema.

## example

```ts
example?: any;
```

Additional external documentation for this schema.
