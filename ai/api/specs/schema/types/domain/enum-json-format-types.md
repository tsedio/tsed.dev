---
title: JsonFormatTypes from @tsed/schema
description: api documentation of JsonFormatTypes from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation JsonFormatTypes enum
---
# JsonFormatTypes - @tsed/schema

## Usage

```typescript
import { JsonFormatTypes } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonFormatTypes.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonFormatTypes.ts#L0-L0).

## Overview

```ts
enum JsonFormatTypes {
    DATE_TIME = "date-time",
    DATE = "date",
    TIME = "time",
    EMAIL = "email",
    HOSTNAME = "hostname",
    IPV4 = "ipv4",
    IPV6 = "ipv6",
    URI = "uri",
    URL = "url",
    URI_REF = "uri-reference",
    URI_TEMPLATE = "uri-template",
    JSON_POINTER = "json-pointer",
    RELATIVE_JSON_POINTER = "relative-json-pointer",
    UUID = "uuid",
    REGEX = "regex"
}
```

<!-- Description -->

## Description

Standard JSON Schema format types for string validation.

These format types provide semantic validation for string values beyond basic
pattern matching. They are part of the JSON Schema specification and widely
supported by validation libraries.

### Date and Time Formats

-   **DATE_TIME**: RFC 3339 date-time (e.g., "2024-01-15T10:30:00Z")
-   **DATE**: RFC 3339 full-date (e.g., "2024-01-15")
-   **TIME**: RFC 3339 full-time (e.g., "10:30:00")

### Network Formats

-   **EMAIL**: Email address (RFC 5322)
-   **HOSTNAME**: Internet hostname (RFC 1123)
-   **IPV4**: IPv4 address
-   **IPV6**: IPv6 address
-   **URI**: Uniform Resource Identifier (RFC 3986)
-   **URL**: URL variant of URI
-   **URI_REF**: URI reference
-   **URI_TEMPLATE**: URI template (RFC 6570)

### Other Formats

-   **JSON_POINTER**: JSON Pointer (RFC 6901)
-   **RELATIVE_JSON_POINTER**: Relative JSON Pointer
-   **UUID**: Universally Unique Identifier (RFC 4122)
-   **REGEX**: Regular expression (ECMA-262)

### Usage

```typescript
import {JsonFormatTypes} from "@tsed/schema";

schema.format(JsonFormatTypes.EMAIL);
schema.format(JsonFormatTypes.DATE_TIME);
```

<!-- Members -->

## DATE_TIME

```ts
DATE_TIME = "date-time",
```

## DATE

```ts
DATE = "date",
```

## TIME

```ts
TIME = "time",
```

## EMAIL

```ts
EMAIL = "email",
```

## HOSTNAME

```ts
HOSTNAME = "hostname",
```

## IPV4

```ts
IPV4 = "ipv4",
```

## IPV6

```ts
IPV6 = "ipv6",
```

## URI

```ts
URI = "uri",
```

## URL

```ts
URL = "url",
```

## URI_REF

```ts
URI_REF = "uri-reference",
```

## URI_TEMPLATE

```ts
URI_TEMPLATE = "uri-template",
```

## JSON_POINTER

```ts
JSON_POINTER = "json-pointer",
```

## RELATIVE_JSON_POINTER

```ts
RELATIVE_JSON_POINTER = "relative-json-pointer",
```

## UUID

```ts
UUID = "uuid",
```

## REGEX

```ts
REGEX = "regex"
```
