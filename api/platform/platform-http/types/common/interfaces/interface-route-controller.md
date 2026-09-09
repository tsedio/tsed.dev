---
url: >-
  /api/platform/platform-http/types/common/interfaces/interface-route-controller.md
description: api documentation of RouteController from @tsed/platform-http
---

## Usage

```typescript
import { RouteController } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/interfaces/Route.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/interfaces/Route.ts#L0-L0).

## Overview

```ts
interface RouteController {
    route: string;
    routes: Set<string>;
    provider: Provider;
}
```

## route

```ts
route: string;
```

## routes

```ts
routes: Set<string>;
```

## provider

```ts
provider: Provider;
```
