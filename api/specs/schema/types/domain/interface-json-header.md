---
url: /api/specs/schema/types/domain/interface-json-header.md
description: api documentation of JsonHeader from @tsed/schema
---

## Usage

```typescript
import { JsonHeader } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonOpenSpec.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonOpenSpec.ts#L0-L0).

## Overview

```ts
interface JsonHeader extends OS3Header {
}
```

## Description

Represents an HTTP header in JSON schema format, compatible with OpenAPI Specification 3.

This interface extends the OpenAPI 3 header specification, allowing full compatibility
with OpenAPI header definitions while providing JSON schema integration.
