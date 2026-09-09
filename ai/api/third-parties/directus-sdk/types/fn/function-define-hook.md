---
title: defineHook from @tsed/directus-sdk
description: api documentation of defineHook from @tsed/directus-sdk
meta:
 - name: keywords
   description: api typescript node.js documentation defineHook function
---
# defineHook - @tsed/directus-sdk

## Usage

```typescript
import { defineHook } from "@tsed/third-parties/directus-sdk/src/fn/defineHook";
```

> See [/packages/third-parties/directus-sdk/src/fn/defineHook.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/directus-sdk/src/fn/defineHook.ts#L0-L0).

## Overview

```ts
function defineHook(callback: (register: RegisterFunctions, context: HookExtensionContext) => unknown | Promise<unknown> | void): (register: RegisterFunctions, context: HookExtensionContext) => Promise<unknown>;
```

-   **callback** (`(register: RegisterFunctions`): - The hook initialization function that receives:

<!-- Description -->

## Description

Defines a Directus hook with Ts.ED dependency injection support.

This function wraps your hook callback to provide:

-   Automatic Ts.ED DI container initialization
-   Service injection via `inject()` function
-   Proper error handling and logging
-   Access to Directus context through `DirectusContextService`

Hooks allow you to trigger custom logic when certain events occur in Directus,
such as when items are created, updated, or deleted.

### Basic hook with filters

```ts
import {defineHook} from "@tsed/directus-sdk";
import {inject} from "@tsed/di";

export default defineHook(({filter, action}) => {
  const validationService = inject(ValidationService);

  // Filter runs before the event (can modify data or cancel operation)
  filter("items.create", async (payload, meta) => {
    await validationService.validate(payload);
    return payload;
  });

  // Action runs after the event (cannot modify data)
  action("items.create", async (meta) => {
    console.log("Item created:", meta.key);
  });
});
```

### Hook with service injection and multiple events

```ts
import {defineHook} from "@tsed/directus-sdk";
import {inject} from "@tsed/di";
import {logger} from "@tsed/logger";

export default defineHook(({filter, action}) => {
  const productService = inject(ProductService);
  const notificationService = inject(NotificationService);

  logger().info("Product hooks loaded");

  // Ensure unique product rankings on create
  filter("product_rankings.items.create", async (payload) => {
    return productService.ensureUniqueRanking(payload);
  });

  // Ensure unique product rankings on update
  filter("product_rankings.items.update", async (payload) => {
    return productService.ensureUniqueRanking(payload);
  });

  // Send notification when product is published
  action("products.items.update", async (meta, context) => {
    if (context.payload.status === "published") {
      await notificationService.sendPublishedNotification(meta.key);
    }
  });

  // Return services for debugging/testing
  return {
    productService,
    notificationService
  };
});
```

### Hook with init and schedule

```ts
import {defineHook} from "@tsed/directus-sdk";
import {inject} from "@tsed/di";

export default defineHook(({init, schedule}) => {
  const cacheService = inject(CacheService);
  const syncService = inject(SyncService);

  // Run once when Directus starts
  init("app.before", async () => {
    await cacheService.warmup();
  });

  // Run on a schedule (cron syntax)
  schedule("0 * * * *", async () => {
    await syncService.hourlySync();
  });
});
```

-   `register` - Functions to register event handlers (filter, action, init, schedule, embed)
-   `context` - The Directus hook extension context
