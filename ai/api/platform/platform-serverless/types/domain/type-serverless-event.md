---
title: ServerlessEvent from @tsed/platform-serverless
description: api documentation of ServerlessEvent from @tsed/platform-serverless
meta:
 - name: keywords
   description: api typescript node.js documentation ServerlessEvent type
---
# ServerlessEvent - @tsed/platform-serverless

## Usage

```typescript
import { ServerlessEvent } from "@tsed/platform/platform-serverless/src/domain/ServerlessEvent";
```

> See [/packages/platform/platform-serverless/src/domain/ServerlessEvent.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-serverless/src/domain/ServerlessEvent.ts#L0-L0).

## Overview

```ts
type ServerlessEvent = APIGatewayProxyEvent | APIGatewayProxyEventV2 | S3Event | SQSEvent | SNSEvent | DynamoDBStreamEvent | KinesisStreamEvent | CloudWatchLogsEvent | ScheduledEvent | APIGatewayTokenAuthorizerEvent;
```
