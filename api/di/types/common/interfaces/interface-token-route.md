---
url: /api/di/types/common/interfaces/interface-token-route.md
description: api documentation of TokenRoute from @tsed/di
---

## Usage

```typescript
import { TokenRoute } from "@tsed/di";
```

> See [/packages/di/src/common/interfaces/TokenRoute.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/TokenRoute.ts#L0-L0).

## Overview

```ts
interface TokenRoute {
    token: TokenProvider;
    route: string;
}
```

## Description

Associates a provider token with a route path.

Used to map controllers or route handlers to specific URL paths in the routing system.

### Usage

```typescript
const route: TokenRoute = {
  token: MyController,
  route: "/api/users"
};
```

## token

```ts
token: TokenProvider;
```

## route

```ts
route: string;
```
