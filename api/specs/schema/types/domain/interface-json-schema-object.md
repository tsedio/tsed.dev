---
url: /api/specs/schema/types/domain/interface-json-schema-object.md
description: api documentation of JsonSchemaObject from @tsed/schema
---

## Usage

```typescript
import { JsonSchemaObject } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonSchema.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonSchema.ts#L0-L0).

## Overview

```ts
interface JsonSchemaObject extends Omit<JSONSchema7, "type" | "additionalProperties" | "items" | "pattern"> {
    type?: JSONSchema7["type"] | Type | null | (String | null | Date | Number | Object | Boolean)[];
    additionalProperties?: JsonSchemaObject | boolean | Type | JsonSchema;
    items?: JsonSchemaObject | boolean | Type | JsonSchema | (JsonSchemaObject | Type | JsonSchema)[];
    pattern?: string | RegExp;
    [key: `x-${string}`]: unknown;
}
```

## Description

Extended JSON Schema object supporting TypeScript types and Ts.ED enhancements.

This interface extends the standard JSON Schema 7 specification with additional
type flexibility, allowing TypeScript classes and types to be used directly
in schema definitions.

## type: JSONSchema7\["type"] | Type | null |

```ts
type?: JSONSchema7["type"] | Type | null | (String | null | Date | Number | Object | Boolean)[];
```

## additionalProperties

```ts
additionalProperties?: JsonSchemaObject | boolean | Type | JsonSchema;
```

## items: JsonSchemaObject | boolean | Type | JsonSchema |

```ts
items?: JsonSchemaObject | boolean | Type | JsonSchema | (JsonSchemaObject | Type | JsonSchema)[];
```

## pattern

```ts
pattern?: string | RegExp;
```

## \[key: `x-${string}`]

```ts
[key: `x-${string}`]: unknown;
```
