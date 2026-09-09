---
title: JsonResponse from @tsed/schema
description: api documentation of JsonResponse from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation JsonResponse class
---
# JsonResponse - @tsed/schema

## Usage

```typescript
import { JsonResponse } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonResponse.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonResponse.ts#L0-L0).

## Overview

```ts
class JsonResponse extends JsonMap<JsonResponseOptions> {
    $kind: string;
    status: number;
    constructor(obj?: Partial<JsonResponseOptions>);
    description(description: string): this;
    headers(headers: Record<string, string | JsonHeader>): this;
    content(content: Record<string, OS3MediaType<JsonSchema>>): this;
    getContent(): JsonMap<JsonMedia>;
    getMedia(mediaType: string, create?: boolean): JsonMedia;
    addMedia(mediaType: string): this;
    isBinary(): boolean;
}
```

<!-- Description -->

## Description

Represents an HTTP response definition for OpenAPI specifications.

JsonResponse defines the structure of an HTTP response including status code,
description, headers, and content types. It provides a fluent API for building
response metadata compatible with OpenAPI 3 specifications.

### Usage

```typescript
const response = new JsonResponse()
  .description("User created successfully")
  .headers({"X-Rate-Limit": "100"})
  .content({
    "application/json": {
      schema: userSchema
    }
  });
```

### Key Features

-   **Status Codes**: Associated HTTP status code
-   **Headers**: Response header definitions
-   **Content Types**: Multiple media type support
-   **Schema Integration**: JSON schemas for response bodies

<!-- Members -->

## $kind

```ts
$kind: string;
```

## status

```ts
status: number;
```

## description

```ts
description(description: string): this;
```

## headers

```ts
headers(headers: Record<string, string | JsonHeader>): this;
```

## content

```ts
content(content: Record<string, OS3MediaType<JsonSchema>>): this;
```

## getContent

```ts
getContent(): JsonMap<JsonMedia>;
```

## getMedia

```ts
getMedia(mediaType: string, create?: boolean): JsonMedia;
```

## addMedia

```ts
addMedia(mediaType: string): this;
```

## isBinary

```ts
isBinary(): boolean;
```
