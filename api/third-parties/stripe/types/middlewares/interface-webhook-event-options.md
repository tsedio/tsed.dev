---
url: /api/third-parties/stripe/types/middlewares/interface-webhook-event-options.md
description: api documentation of WebhookEventOptions from @tsed/stripe
---

## Usage

```typescript
import { WebhookEventOptions } from "@tsed/stripe";
```

> See [/packages/third-parties/stripe/src/middlewares/WebhookEventMiddleware.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/stripe/src/middlewares/WebhookEventMiddleware.ts#L0-L0).

## Overview

```ts
interface WebhookEventOptions {
    secret: string;
    tolerance: number;
}
```

## secret

```ts
secret: string;
```

## tolerance

```ts
tolerance: number;
```
