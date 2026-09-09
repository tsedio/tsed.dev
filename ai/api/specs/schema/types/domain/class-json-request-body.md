---
title: JsonRequestBody from @tsed/schema
description: api documentation of JsonRequestBody from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation JsonRequestBody class
---
# JsonRequestBody - @tsed/schema

## Usage

```typescript
import { JsonRequestBody } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonRequestBody.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonRequestBody.ts#L0-L0).

## Overview

```ts
class JsonRequestBody extends JsonMap<JsonRequestBodyOptions> {
    $kind: string;
    constructor(obj?: Partial<JsonRequestBodyOptions>);
    description(description: string): this;
    content(content: OpenSpecHash<OS3MediaType<JsonSchema>>): this;
    addContent(mediaType: string, schema: JsonSchema, examples?: any): this;
    required(required: boolean): this;
}
```

<!-- Description -->

## Description

Represents an HTTP request body definition for OpenAPI specifications.

JsonRequestBody defines the structure and content types accepted by an HTTP
operation's request body. It provides a fluent API for specifying request
body schemas, media types, and examples.

### Usage

```typescript
const requestBody = new JsonRequestBody()
  .description("User creation payload")
  .addContent("application/json", userSchema, {
    example1: {name: "John", email: "john@example.com"}
  });
```

### Key Features

-   **Content Types**: Support for multiple media types (JSON, XML, form data, etc.)
-   **Schema Integration**: JSON schemas for request validation
-   **Examples**: Request body examples for documentation
-   **Required Flag**: Mark request body as required or optional

<!-- Members -->

## $kind

```ts
$kind: string;
```

## description

```ts
description(description: string): this;
```

## content

```ts
content(content: OpenSpecHash<OS3MediaType<JsonSchema>>): this;
```

## addContent

```ts
addContent(mediaType: string, schema: JsonSchema, examples?: any): this;
```

## required

```ts
required(required: boolean): this;
```
