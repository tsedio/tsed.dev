---
url: >-
  /api/platform/platform-router/types/domain/interface-alter-endpoint-handlers-arg.md
description: api documentation of AlterEndpointHandlersArg from @tsed/platform-router
---

## Usage

```typescript
import { AlterEndpointHandlersArg } from "@tsed/platform-router";
```

> See [/packages/platform/platform-router/src/domain/PlatformRouters.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-router/src/domain/PlatformRouters.ts#L0-L0).

## Overview

```ts
interface AlterEndpointHandlersArg {
    before: (Type<any> | Function)[];
    endpoint: JsonMethodStore;
    after: (Type<any> | Function)[];
}
```

## before:

```ts
before: (Type<any> | Function)[];
```

## endpoint

```ts
endpoint: JsonMethodStore;
```

## after:

```ts
after: (Type<any> | Function)[];
```
