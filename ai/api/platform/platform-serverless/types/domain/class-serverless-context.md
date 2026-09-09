---
title: ServerlessContext from @tsed/platform-serverless
description: api documentation of ServerlessContext from @tsed/platform-serverless
meta:
 - name: keywords
   description: api typescript node.js documentation ServerlessContext class
---
# ServerlessContext - @tsed/platform-serverless

## Usage

```typescript
import { ServerlessContext } from "@tsed/platform-serverless";
```

> See [/packages/platform/platform-serverless/src/domain/ServerlessContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-serverless/src/domain/ServerlessContext.ts#L0-L0).

## Overview

```ts
class ServerlessContext<Event extends object = APIGatewayProxyEvent> extends DIContext {
    readonly response: ServerlessResponse<Event>;
    readonly request: ServerlessRequest<Event>;
    readonly context: Context;
    readonly event: Event;
    readonly responseStream: ServerlessResponseStream | undefined;
    readonly endpoint: JsonEntityStore;
    readonly PLATFORM = "SERVERLESS";
    constructor({ event, context, endpoint, responseStream, ...options }: ServerlessContextOptions<Event>);
    isHttpEvent(): boolean;
    isAuthorizerEvent(): boolean;
    destroy(): Promise<void>;
    isDone(): boolean;
}
```

<!-- Members -->

## readonly response

```ts
readonly response: ServerlessResponse<Event>;
```

## readonly request

```ts
readonly request: ServerlessRequest<Event>;
```

## readonly context

```ts
readonly context: Context;
```

## readonly event

```ts
readonly event: Event;
```

## readonly responseStream

```ts
readonly responseStream: ServerlessResponseStream | undefined;
```

## readonly endpoint

```ts
readonly endpoint: JsonEntityStore;
```

## readonly PLATFORM

```ts
readonly PLATFORM = "SERVERLESS";
```

## isHttpEvent

```ts
isHttpEvent(): boolean;
```

## isAuthorizerEvent

```ts
isAuthorizerEvent(): boolean;
```

## destroy

```ts
destroy(): Promise<void>;
```

## isDone

```ts
isDone(): boolean;
```
