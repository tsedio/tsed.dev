---
url: /api/specs/schema/types/utils/interface-get-operations-routes-options.md
description: api documentation of GetOperationsRoutesOptions from @tsed/schema
---

## Usage

```typescript
import { GetOperationsRoutesOptions } from "@tsed/schema";
```

> See [/packages/specs/schema/src/utils/getOperationsRoutes.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/utils/getOperationsRoutes.ts#L0-L0).

## Overview

```ts
interface GetOperationsRoutesOptions {
    withChildren?: boolean;
    basePath?: string;
    allowedVerbs?: OperationVerbs[];
}
```

## withChildren

```ts
withChildren?: boolean;
```

## basePath

```ts
basePath?: string;
```

## allowedVerbs

```ts
allowedVerbs?: OperationVerbs[];
```
