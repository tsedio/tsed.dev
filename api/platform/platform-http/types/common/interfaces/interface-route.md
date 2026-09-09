---
url: /api/platform/platform-http/types/common/interfaces/interface-route.md
description: api documentation of Route from @tsed/platform-http
---

## Usage

```typescript
import { Route } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/interfaces/Route.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/interfaces/Route.ts#L0-L0).

## Overview

```ts
interface Route extends Record<string, any> {
    route: string;
    token: TokenProvider;
}
```

## route

```ts
route: string;
```

## token

```ts
token: TokenProvider;
```
