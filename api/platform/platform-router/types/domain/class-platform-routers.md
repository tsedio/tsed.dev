---
url: /api/platform/platform-router/types/domain/class-platform-routers.md
description: api documentation of PlatformRouters from @tsed/platform-router
---

## Usage

```typescript
import { PlatformRouters } from "@tsed/platform-router";
```

> See [/packages/platform/platform-router/src/domain/PlatformRouters.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-router/src/domain/PlatformRouters.ts#L0-L0).

## Overview

```ts
class PlatformRouters {
    readonly hooks: Hooks;
    readonly allowedVerbs: import("@tsed/schema").OperationVerbs[];
    prebuild(): void;
    from(token: TokenProvider, parentMiddlewares?: any[]): PlatformRouter;
    getLayers(router: PlatformRouter): PlatformLayer[];
    
}
```

## readonly hooks

```ts
readonly hooks: Hooks;
```

## readonly allowedVerbs: import

```ts
readonly allowedVerbs: import("@tsed/schema").OperationVerbs[];
```

## prebuild

```ts
prebuild(): void;
```

## from

```ts
from(token: TokenProvider, parentMiddlewares?: any[]): PlatformRouter;
```

## getLayers

```ts
getLayers(router: PlatformRouter): PlatformLayer[];
```
