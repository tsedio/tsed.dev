---
url: /api/platform/platform-serverless-testing/types/class-lambda-client-request.md
description: >-
  api documentation of LambdaClientRequest from
  @tsed/platform-serverless-testing
---

## Usage

```typescript
import { LambdaClientRequest } from "@tsed/platform-serverless-testing";
```

> See [/packages/platform/platform-serverless-testing/src/PlatformServerlessTest.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-serverless-testing/src/PlatformServerlessTest.ts#L0-L0).

## Overview

```ts
class LambdaClientRequest extends Promise<APIGatewayProxyResult> {
    event: APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>;
    context: import("aws-lambda").Context;
    static call(lambdaName: string): LambdaClientRequest;
    static get(path: string, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): LambdaClientRequest;
    static post(path: string, body?: any, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): LambdaClientRequest;
    static put(path: string, body?: any, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): LambdaClientRequest;
    static patch(path: string, body?: any, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): LambdaClientRequest;
    static delete(path: string, body?: any, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): LambdaClientRequest;
    get(path: string, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): this;
    post(path: string, body?: any, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): this;
    patch(path: string, body?: any, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): this;
    put(path: string, body?: any, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): this;
    delete(path: string, body?: any, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): this;
    query(query: any): this;
    params(pathParameters: any): this;
    headers(headers: Record<string, any>): this;
    body(body: any): this;
    protected init(lambda: string, resolve: Function, reject: Function): void;
}
```

## event

```ts
event: APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>;
```

## context: import

```ts
context: import("aws-lambda").Context;
```

## static call

```ts
static call(lambdaName: string): LambdaClientRequest;
```

## static get

```ts
static get(path: string, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): LambdaClientRequest;
```

## static post

```ts
static post(path: string, body?: any, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): LambdaClientRequest;
```

## static put

```ts
static put(path: string, body?: any, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): LambdaClientRequest;
```

## static patch

```ts
static patch(path: string, body?: any, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): LambdaClientRequest;
```

## static delete

```ts
static delete(path: string, body?: any, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): LambdaClientRequest;
```

## get

```ts
get(path: string, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): this;
```

## post

```ts
post(path: string, body?: any, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): this;
```

## patch

```ts
patch(path: string, body?: any, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): this;
```

## put

```ts
put(path: string, body?: any, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): this;
```

## delete

```ts
delete(path: string, body?: any, options?: Partial<APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>>): this;
```

## query

```ts
query(query: any): this;
```

## params

```ts
params(pathParameters: any): this;
```

## headers

```ts
headers(headers: Record<string, any>): this;
```

## body

```ts
body(body: any): this;
```

## protected init

```ts
protected init(lambda: string, resolve: Function, reject: Function): void;
```
