---
url: /api/specs/schema/types/domain/interface-json-headers.md
description: api documentation of JsonHeaders from @tsed/schema
---

## Usage

```typescript
import { JsonHeaders } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonOpenSpec.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonOpenSpec.ts#L0-L0).

## Overview

```ts
interface JsonHeaders {
    [key: string]: number | string | (JsonHeader & {
        type?: string;
        value?: string | number;
    });
}
```

## Description

Collection of HTTP headers for OpenAPI operations.

Headers can be defined as simple values (number or string) or as detailed header
objects with schema information. This flexible structure supports both quick
header definitions and comprehensive OpenAPI header specifications.

### Usage

```typescript
const headers: JsonHeaders = {
  // Simple header value
  "X-Rate-Limit": 100,

  // Detailed header with schema
  "X-Request-ID": {
    description: "Unique request identifier",
    type: "string",
    value: "abc-123"
  }
};
```

## \[key: string]: number | string |

```ts
[key: string]: number | string | (JsonHeader & {
     type?: string;
     value?: string | number;
 });
```
