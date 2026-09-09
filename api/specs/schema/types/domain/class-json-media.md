---
url: /api/specs/schema/types/domain/class-json-media.md
description: api documentation of JsonMedia from @tsed/schema
---

## Usage

```typescript
import { JsonMedia } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonMedia.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonMedia.ts#L0-L0).

## Overview

```ts
class JsonMedia extends JsonMap<any> {
    $kind: string;
    constructor(obj?: Partial<OS3MediaType<JsonSchema>>);
    schema(schema?: JsonSchema): JsonSchema;
    examples(examples?: any): this;
    type(type: any): this;
}
```

## Description

Represents a media type definition for HTTP request or response bodies.

JsonMedia encapsulates the schema and examples for a specific media type
(e.g., "application/json", "application/xml") in OpenAPI specifications.
It provides methods to configure the schema and examples for the media type.

### Usage

```typescript
const media = new JsonMedia();
media.type(User);
media.examples({
  user1: {
    value: {name: "John", email: "john@example.com"}
  }
});
```

### Key Features

* **Schema Definition**: Associated JSON schema for validation
* **Examples**: Request/response examples for documentation
* **Type Handling**: Automatic schema generation from TypeScript types
* **Union Types**: Support for oneOf schemas with multiple types

## $kind

```ts
$kind: string;
```

## schema

```ts
schema(schema?: JsonSchema): JsonSchema;
```

## examples

```ts
examples(examples?: any): this;
```

## type

```ts
type(type: any): this;
```
