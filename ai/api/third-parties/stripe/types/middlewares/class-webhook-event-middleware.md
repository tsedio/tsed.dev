---
title: WebhookEventMiddleware from @tsed/stripe
description: api documentation of WebhookEventMiddleware from @tsed/stripe
meta:
 - name: keywords
   description: api typescript node.js documentation WebhookEventMiddleware class
---
# WebhookEventMiddleware - @tsed/stripe

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

<!-- Members -->

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
