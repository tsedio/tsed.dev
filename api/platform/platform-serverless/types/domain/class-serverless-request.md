---
url: /api/platform/platform-serverless/types/domain/class-serverless-request.md
description: api documentation of ServerlessRequest from @tsed/platform-serverless
---

## Usage

```typescript
import { ServerlessRequest } from "@tsed/platform-serverless";
```

> See [/packages/platform/platform-serverless/src/domain/ServerlessRequest.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-serverless/src/domain/ServerlessRequest.ts#L0-L0).

## Overview

```ts
class ServerlessRequest<Event extends object = APIGatewayProxyEvent> {
    protected $ctx: ServerlessContext<Event>;
    constructor($ctx: ServerlessContext<Event>);
    get event(): APIGatewayProxyEvent;
    get raw(): Event;
    get response(): import("./ServerlessResponse.js").ServerlessResponse<Event>;
    get secure(): boolean;
    get host(): string;
    get protocol(): string;
    get url(): string;
    get headers(): import("aws-lambda").APIGatewayProxyEventHeaders;
    get method(): string;
    get body(): any;
    get rawBody(): any;
    get params(): {
        [key: string]: any;
    };
    get query(): {
        [key: string]: any;
    };
    getEvent<E = Event>(): E;
    get(name: string): any;
}
```

## protected $ctx

```ts
protected $ctx: ServerlessContext<Event>;
```

## get event

```ts
get event(): APIGatewayProxyEvent;
```

APIGatewayProxyEvent to no break the current code

## get raw

```ts
get raw(): Event;
```

## get response

```ts
get response(): import("./ServerlessResponse.js").ServerlessResponse<Event>;
```

## get secure

```ts
get secure(): boolean;
```

## get host

```ts
get host(): string;
```

## get protocol

```ts
get protocol(): string;
```

## get url

```ts
get url(): string;
```

Get the url of the request.

Is equivalent of `express.response.originalUrl || express.response.url`.

## get headers

```ts
get headers(): import("aws-lambda").APIGatewayProxyEventHeaders;
```

## get method

```ts
get method(): string;
```

## get body

```ts
get body(): any;
```

Contains key-value pairs of data submitted in the request body. By default, it is `undefined`, and is populated when you use
`body-parsing` middleware such as `express.json()` or `express.urlencoded()`.

## get rawBody

```ts
get rawBody(): any;
```

## get params

```ts
get params(): {
     [key: string]: any;
 };
```

This property is an object containing properties mapped to the named route `parameters`.
For example, if you have the route `/user/:name`, then the `name` property is available as `req.params.name`.
This object defaults to `{}`.

## get query

```ts
get query(): {
     [key: string]: any;
 };
```

This property is an object containing a property for each query string parameter in the route.
When query parser is set to disabled, it is an empty object `{}`, otherwise it is the result of the configured query parser.

## getEvent

```ts
getEvent<E = Event>(): E;
```

## get

```ts
get(name: string): any;
```

Returns the HTTP request header specified by field. The match is case-insensitive.

```typescript
request.get('Content-Type') // => "text/plain"
```
