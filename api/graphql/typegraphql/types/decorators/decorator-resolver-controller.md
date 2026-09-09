---
url: /api/graphql/typegraphql/types/decorators/decorator-resolver-controller.md
description: api documentation of ResolverController from @tsed/typegraphql
---

## Usage

```typescript
import { ResolverController } from "@tsed/typegraphql";
```

> See [/packages/graphql/typegraphql/src/decorators/resolver.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/graphql/typegraphql/src/decorators/resolver.ts#L0-L0).

## Overview

```ts
function ResolverController(): ClassDecorator;
export function ResolverController(path: string): ClassDecorator;
export function ResolverController(typeFunc: (of?: void) => ClassType | Function, options?: ResolverControllerOptions): ClassDecorator;
export function ResolverController(objectType: ClassType, options?: ResolverControllerOptions): ClassDecorator;
```
