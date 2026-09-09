---
title: JsonParameterTypes from @tsed/schema
description: api documentation of JsonParameterTypes from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation JsonParameterTypes enum
---
# JsonParameterTypes - @tsed/schema

## Usage

```typescript
import { JsonParameterTypes } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonParameterTypes.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonParameterTypes.ts#L0-L0).

## Overview

```ts
enum JsonParameterTypes {
    BODY = "body",
    PATH = "path",
    QUERY = "query",
    HEADER = "header",
    COOKIES = "cookie",
    FILES = "files"
}
```

<!-- Description -->

## Description

HTTP operation parameter location types.

This enum defines where parameters can be located in an HTTP request.
These types are used for both JSON Schema and OpenAPI parameter definitions.

### Parameter Locations

-   **BODY**: Request body parameter (payload)
-   **PATH**: URL path parameter (e.g., `/users/{id}`)
-   **QUERY**: URL query string parameter (e.g., `?page=1`)
-   **HEADER**: HTTP header parameter (e.g., `Authorization`)
-   **COOKIES**: Cookie parameter
-   **FILES**: File upload parameter (multipart/form-data)

### Usage

```typescript
import {JsonParameterTypes} from "@tsed/schema";

parameter.in(JsonParameterTypes.QUERY);
parameter.in(JsonParameterTypes.PATH);
```

<!-- Members -->

## BODY

```ts
BODY = "body",
```

## PATH

```ts
PATH = "path",
```

## QUERY

```ts
QUERY = "query",
```

## HEADER

```ts
HEADER = "header",
```

## COOKIES

```ts
COOKIES = "cookie",
```

## FILES

```ts
FILES = "files"
```
