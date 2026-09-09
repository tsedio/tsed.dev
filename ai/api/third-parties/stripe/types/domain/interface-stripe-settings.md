---
title: StripeSettings from @tsed/stripe
description: api documentation of StripeSettings from @tsed/stripe
meta:
 - name: keywords
   description: api typescript node.js documentation StripeSettings interface
---
# StripeSettings - @tsed/stripe

## Usage

```typescript
import { StripeSettings } from "@tsed/stripe";
```

> See [/packages/third-parties/stripe/src/domain/StripeSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/stripe/src/domain/StripeSettings.ts#L0-L0).

## Overview

```ts
interface StripeSettings extends Stripe.StripeConfig {
    apiKey: string;
    webhooks?: {
        secret: string;
        tolerance?: number;
    };
}
```

<!-- Members -->

## apiKey

```ts
apiKey: string;
```

Stripe ApiKey

## webhooks

```ts
webhooks?: {
     secret: string;
     tolerance?: number;
 };
```

Webhooks settings
