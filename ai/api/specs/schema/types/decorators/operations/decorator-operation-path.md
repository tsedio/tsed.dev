---
title: OperationPath from @tsed/schema
description: api documentation of OperationPath from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation OperationPath decorator
---
# OperationPath - @tsed/schema

## Usage

```typescript
import { OperationPath } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/operationPath.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/operationPath.ts#L0-L0).

## Overview

```ts
function OperationPath(method: OperationVerbs | string, path?: string | RegExp): (...args: any[]) => any;
```

<!-- Description -->

## Description

Declare new Operation with his path and http method.

::: warning
Don't use decorator with Ts.ED application.

Use these decorators instead:

<ApiList query="status.includes('decorator') && status.includes('httpMethod')" />

:::
