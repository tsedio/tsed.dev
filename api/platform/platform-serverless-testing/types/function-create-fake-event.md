---
url: /api/platform/platform-serverless-testing/types/function-create-fake-event.md
description: api documentation of createFakeEvent from @tsed/platform-serverless-testing
---

## Usage

```typescript
import { createFakeEvent } from "@tsed/platform-serverless-testing";
```

> See [/packages/platform/platform-serverless-testing/src/createFakeEvent.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-serverless-testing/src/createFakeEvent.ts#L0-L0).

## Overview

```ts
function createFakeEvent(event?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>;
```
