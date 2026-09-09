---
url: /api/specs/schema/types/utils/function-get-operation-id.md
description: api documentation of getOperationId from @tsed/schema
---

## Usage

```typescript
import { getOperationId } from "@tsed/schema";
```

> See [/packages/specs/schema/src/utils/operationIdFormatter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/utils/operationIdFormatter.ts#L0-L0).

## Overview

```ts
function getOperationId(path: string, { store, operationIdFormatter }: JsonSchemaOptions): any;
```
