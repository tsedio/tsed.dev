---
title: getOperationsRoutes from @tsed/schema
description: api documentation of getOperationsRoutes from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation getOperationsRoutes function
---
# getOperationsRoutes - @tsed/schema

## Usage

```typescript
import { getOperationsRoutes } from "@tsed/schema";
```

> See [/packages/specs/schema/src/utils/getOperationsRoutes.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/utils/getOperationsRoutes.ts#L0-L0).

## Overview

```ts
function getOperationsRoutes<Entity extends JsonMethodStore = JsonMethodStore>(token: Type<any> | any, options?: GetOperationsRoutesOptions): JsonOperationRoute<Entity>[];
```
