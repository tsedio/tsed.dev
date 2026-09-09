---
url: /api/specs/schema/types/domain/interface-json-operation-options.md
description: api documentation of JsonOperationOptions from @tsed/schema
---

## Usage

```typescript
import { JsonOperationOptions } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonOperation.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonOperation.ts#L0-L0).

## Overview

```ts
interface JsonOperationOptions extends OS3Operation<JsonSchema, JsonParameter, JsonMap<JsonResponse>> {
    consumes: string[];
    produces: string[];
}
```

## Description

Configuration options for JSON operations compatible with OpenAPI 3 specifications.

Extends the OpenAPI 3 operation specification with Ts.ED-specific media type
declarations (consumes/produces) for request and response handling.

## consumes

```ts
consumes: string[];
```

## produces

```ts
produces: string[];
```
