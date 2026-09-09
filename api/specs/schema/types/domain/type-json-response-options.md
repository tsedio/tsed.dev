---
url: /api/specs/schema/types/domain/type-json-response-options.md
description: api documentation of JsonResponseOptions from @tsed/schema
---

## Usage

```typescript
import { JsonResponseOptions } from "@tsed/specs/schema/src/domain/JsonResponse";
```

> See [/packages/specs/schema/src/domain/JsonResponse.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonResponse.ts#L0-L0).

## Overview

```ts
type JsonResponseOptions = OS3Response<JsonSchema, string | JsonHeader>;
```

## Description

Configuration options for HTTP response definitions compatible with OpenAPI 3.
