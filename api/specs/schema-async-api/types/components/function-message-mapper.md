---
url: /api/specs/schema-async-api/types/components/function-message-mapper.md
description: api documentation of messageMapper from @tsed/schema-async-api
---

## Usage

```typescript
import { messageMapper } from "@tsed/schema-async-api";
```

> See [/packages/specs/schema-async-api/src/components/messageMapper.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema-async-api/src/components/messageMapper.ts#L0-L0).

## Overview

```ts
function messageMapper(jsonOperationStore: JsonMethodStore, operationPath: JsonMethodPath, { tags, defaultTags, ...options }?: JsonSchemaOptions): {
    $ref: string;
};
```

## $ref

```ts
$ref: string;
```
