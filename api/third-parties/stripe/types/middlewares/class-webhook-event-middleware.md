---
url: /api/third-parties/stripe/types/middlewares/class-webhook-event-middleware.md
description: api documentation of WebhookEventMiddleware from @tsed/stripe
---

## Usage

```typescript
import { WebhookEventMiddleware } from "@tsed/stripe";
```

> See [/packages/third-parties/stripe/src/middlewares/WebhookEventMiddleware.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/stripe/src/middlewares/WebhookEventMiddleware.ts#L0-L0).

## Overview

```ts
class WebhookEventMiddleware implements MiddlewareMethods {
    protected stripe: Stripe;
    protected webhooks: WebhookEventOptions;
    use(signature: string, body: Buffer, ctx: Context): any;
}
```

## protected stripe

```ts
protected stripe: Stripe;
```

## protected webhooks

```ts
protected webhooks: WebhookEventOptions;
```

## use

```ts
use(signature: string, body: Buffer, ctx: Context): any;
```
