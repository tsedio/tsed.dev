---
url: /api/third-parties/directus-sdk/types/fn/function-define-endpoint.md
description: api documentation of defineEndpoint from @tsed/directus-sdk
---

## Usage

```typescript
import { defineEndpoint } from "@tsed/third-parties/directus-sdk/src/fn/defineEndpoint";
```

> See [/packages/third-parties/directus-sdk/src/fn/defineEndpoint.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/directus-sdk/src/fn/defineEndpoint.ts#L0-L0).

## Overview

```ts
function defineEndpoint(config: EndpointConfig): EndpointResult;
```

* **config** (`EndpointConfig`): - The endpoint configuration. Can be either:

## Description

Defines a Directus endpoint with Ts.ED dependency injection support.

This function wraps the Directus SDK's `defineEndpoint` to automatically integrate
Ts.ED's DI container, allowing you to use `inject()` to access services within
your endpoint handlers. It also provides automatic error handling and logging.

### Basic endpoint with service injection

```ts
import {defineEndpoint} from "@tsed/directus-sdk";
import {inject} from "@tsed/di";

export default defineEndpoint({
  id: "my-custom-endpoint",
  handler: (router) => {
    router.get("/hello", async (req, res) => {
      const myService = inject(MyService);
      const result = await myService.doSomething();

      return res.json(result);
    });
  }
});
```

### Function-only configuration

```ts
import {defineEndpoint} from "@tsed/directus-sdk";

export default defineEndpoint((router, context) => {
  router.post("/webhook", async (req, res) => {
    const myService = inject(MyService);
    const result = await myService.doSomething();
    // Handle webhook
    res.json({ success: true });
  });
});
```

### With multiple routes and error handling

```ts
import {defineEndpoint} from "@tsed/directus-sdk";
import {inject} from "@tsed/di";

export default defineEndpoint({
  id: "api-v1",
  handler: (router) => {
    router.get("/users", async (req, res) => {
      const userService = inject(UserService);
      const users = await userService.findAll();
      res.json(users);
    });

    router.post("/auth/login", async (req, res) => {
      const authService = inject(AuthService);
      const token = await authService.authenticate(req.body);
      res.json({ token });
    });
  }
});
```

* A function that receives the router and context
* An object with `id` and `handler` properties
