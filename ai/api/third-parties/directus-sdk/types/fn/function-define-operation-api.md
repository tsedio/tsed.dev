---
title: defineOperationApi from @tsed/directus-sdk
description: api documentation of defineOperationApi from @tsed/directus-sdk
meta:
 - name: keywords
   description: api typescript node.js documentation defineOperationApi function
---
# defineOperationApi - @tsed/directus-sdk

## Usage

```typescript
import { defineOperationApi } from "@tsed/third-parties/directus-sdk/src/fn/defineOperationApi";
```

> See [/packages/third-parties/directus-sdk/src/fn/defineOperationApi.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/directus-sdk/src/fn/defineOperationApi.ts#L0-L0).

## Overview

```ts
function defineOperationApi(config: OperationApiConfig): OperationApiResult;
```

-   **config** (`OperationApiConfig`): - The operation configuration containing:

<!-- Description -->

## Description

Defines a Directus operation with Ts.ED dependency injection support.

This function wraps the Directus SDK's `defineOperationApi` to automatically integrate
Ts.ED's DI container, allowing you to use `inject()` to access services within your
operation handlers. Operations are custom logic that can be used in Directus flows.

### Basic operation with service injection

```ts
import {defineOperationApi} from "@tsed/directus-sdk";
import {inject} from "@tsed/di";

type SendEmailOptions = {
  to: string;
  subject: string;
  body: string;
};

export default defineOperationApi<SendEmailOptions>({
  id: "send-email",
  handler: async (options, context) => {
    const emailService = inject(EmailService);

    await emailService.send({
      to: options.to,
      subject: options.subject,
      body: options.body
    });

    return {
      success: true,
      sentAt: new Date().toISOString()
    };
  }
});
```

### Operation with external API call

```ts
import {defineOperationApi} from "@tsed/directus-sdk";
import {inject} from "@tsed/di";

type WebhookOptions = {
  url: string;
  method: "GET" | "POST";
  payload?: Record<string, any>;
};

export default defineOperationApi<WebhookOptions>({
  id: "call-webhook",
  handler: async (options, context) => {
    const httpClient = inject(HttpClient);

    const response = await httpClient.request({
      url: options.url,
      method: options.method,
      data: options.payload
    });

    return {
      statusCode: response.status,
      data: response.data
    };
  }
});
```

### Operation with database access

```ts
import {defineOperationApi} from "@tsed/directus-sdk";
import {inject} from "@tsed/di";

type CalculateStatsOptions = {
  collection: string;
  field: string;
};

export default defineOperationApi<CalculateStatsOptions>({
  id: "calculate-stats",
  handler: async (options, context) => {
    const statsService = inject(StatsService);
    const directusContext = inject(DirectusContextService);

    const itemsService = await directusContext.getItemsService(options.collection);
    const items = await itemsService.readByQuery({ limit: -1 });

    const stats = statsService.calculate(items, options.field);

    return {
      count: items.length,
      average: stats.avg,
      min: stats.min,
      max: stats.max
    };
  }
});
```

-   `id` - Unique identifier for the operation
-   `handler` - Function that executes the operation logic
