---
url: /api/specs/schema/types/utils/function-get-operations-routes.md
description: api documentation of getOperationsRoutes from @tsed/schema
---

## Usage

```typescript
import { getOperationsRoutes } from "@tsed/schema";
```

> See [/packages/specs/schema/src/utils/getOperationsRoutes.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/utils/getOperationsRoutes.ts#L0-L0).

## Overview

```ts
function getOperationsRoutes<Entity extends JsonMethodStore = JsonMethodStore>(token: Type<any> | any, options?: GetOperationsRoutesOptions): JsonOperationRoute<Entity>[];
```
