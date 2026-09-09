---
url: /api/specs/schema/types/decorators/operations/decorator-operation-path.md
description: api documentation of OperationPath from @tsed/schema
---

## Usage

```typescript
import { OperationPath } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/operationPath.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/operationPath.ts#L0-L0).

## Overview

```ts
function OperationPath(method: OperationVerbs | string, path?: string | RegExp): (...args: any[]) => any;
```

## Description

Declare new Operation with his path and http method.

::: warning
Don't use decorator with Ts.ED application.

Use these decorators instead:

:::
