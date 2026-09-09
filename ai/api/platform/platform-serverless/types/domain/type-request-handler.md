---
title: RequestHandler from @tsed/platform-serverless
description: api documentation of RequestHandler from @tsed/platform-serverless
meta:
 - name: keywords
   description: api typescript node.js documentation RequestHandler type
---
# RequestHandler - @tsed/platform-serverless

## Usage

```typescript
import { RequestHandler } from "@tsed/platform/platform-serverless/src/domain/ServerlessResponseStream";
```

> See [/packages/platform/platform-serverless/src/domain/ServerlessResponseStream.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-serverless/src/domain/ServerlessResponseStream.ts#L0-L0).

## Overview

```ts
type RequestHandler = (ev: APIGatewayProxyEventV2, streamResponse?: ServerlessResponseStream, ctx?: Context, callback?: Callback) => unknown | Promise<unknown>;
```
