---
url: /api/specs/schema/types/utils/interface-error-chained-methods.md
description: api documentation of ErrorChainedMethods from @tsed/schema
---

## Usage

```typescript
import { ErrorChainedMethods } from "@tsed/schema";
```

> See [/packages/specs/schema/src/utils/withErrorMsg.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/utils/withErrorMsg.ts#L0-L0).

## Overview

```ts
interface ErrorChainedMethods<T> {
    <T>(target: Object, propertyKey?: string | symbol | undefined, descriptor?: TypedPropertyDescriptor<T> | number): any;
    Error(msg: string): this;
}
```

##

```ts
<T>(target: Object, propertyKey?: string | symbol | undefined, descriptor?: TypedPropertyDescriptor<T> | number): any;
```

## Error

```ts
Error(msg: string): this;
```
