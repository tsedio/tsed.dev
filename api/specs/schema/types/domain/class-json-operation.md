---
url: /api/specs/schema/types/domain/class-json-operation.md
description: api documentation of JsonOperation from @tsed/schema
---

## Usage

```typescript
import { JsonOperation } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonOperation.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonOperation.ts#L0-L0).

## Overview

```ts
class JsonOperation extends JsonMap<JsonOperationOptions> {
    $kind: string;
    readonly operationPaths: Map<string, JsonMethodPath>;
    constructor(obj?: Partial<JsonOperationOptions>);
    get response(): JsonResponse | undefined;
    get status(): number;
    tags(tags: OpenSpecTag[]): this;
    addTags(tags: OpenSpecTag[]): this;
    summary(summary: string): this;
    operationId(operationId: string): this;
    responses(responses: JsonMap<any>): this;
    defaultStatus(status: number): this;
    getStatus(): number;
    setRedirection(status?: number): this;
    isRedirection(status?: number): boolean | 0;
    addResponse(statusCode: string | number, response: JsonResponse): this;
    getResponses(): JsonMap<JsonResponse>;
    getResponseOf(status: number | string): JsonResponse;
    ensureResponseOf(status: number | string): JsonResponse;
    getHeadersOf(status: number): Record<string, JsonHeader & {
        example: string;
    }>;
    getContentTypeOf(status: number): any;
    security(security: OpenSpecSecurity): this;
    addSecurityScopes(name: string, scopes: string[]): this;
    description(description: string): this;
    deprecated(deprecated: boolean): this;
    addAllowedGroupsParameter(allowedGroups: string[]): this;
    parameters(parameters: JsonParameter[]): this;
    addParameter(index: number, parameter: JsonParameter): void;
    consumes(consumes: string[]): this;
    produces(produces: string[]): this;
    addProduce(produce: string): void;
    addOperationPath(method: string, path: string | RegExp): JsonMethodPath;
    getAllowedOperationPath(allowedVerbs?: string[]): JsonMethodPath[];
}
```

## Description

Represents an HTTP operation (endpoint) with complete OpenAPI metadata.

JsonOperation is the core class for defining HTTP endpoints in Ts.ED, storing all
operation-level information required for OpenAPI specification generation including:

* Request parameters (path, query, header, body)
* Response definitions with status codes
* Security requirements
* Tags and categorization
* Media type handling (consumes/produces)
* Operation metadata (summary, description, operationId)

### Usage

```typescript
const operation = new JsonOperation()
  .summary("Create a user")
  .description("Creates a new user in the system")
  .addTags([{name: "Users"}])
  .addParameter(0, parameterMetadata)
  .addResponse(201, responseMetadata);
```

### Key Features

* **Parameters**: Manage operation parameters by index or name
* **Responses**: Define responses for different HTTP status codes
* **Security**: Configure authentication and authorization
* **Media Types**: Specify accepted and produced content types
* **Routing**: Multiple path/method combinations per operation

## $kind

```ts
$kind: string;
```

## readonly operationPaths

```ts
readonly operationPaths: Map<string, JsonMethodPath>;
```

## get response

```ts
get response(): JsonResponse | undefined;
```

## get status

```ts
get status(): number;
```

## tags

```ts
tags(tags: OpenSpecTag[]): this;
```

## addTags

```ts
addTags(tags: OpenSpecTag[]): this;
```

## summary

```ts
summary(summary: string): this;
```

## operationId

```ts
operationId(operationId: string): this;
```

## responses

```ts
responses(responses: JsonMap<any>): this;
```

## defaultStatus

```ts
defaultStatus(status: number): this;
```

## getStatus

```ts
getStatus(): number;
```

## setRedirection

```ts
setRedirection(status?: number): this;
```

## isRedirection

```ts
isRedirection(status?: number): boolean | 0;
```

## addResponse

```ts
addResponse(statusCode: string | number, response: JsonResponse): this;
```

## getResponses

```ts
getResponses(): JsonMap<JsonResponse>;
```

## getResponseOf

```ts
getResponseOf(status: number | string): JsonResponse;
```

## ensureResponseOf

```ts
ensureResponseOf(status: number | string): JsonResponse;
```

## getHeadersOf

```ts
getHeadersOf(status: number): Record<string, JsonHeader & {
     example: string;
 }>;
```

## getContentTypeOf

```ts
getContentTypeOf(status: number): any;
```

## security

```ts
security(security: OpenSpecSecurity): this;
```

## addSecurityScopes

```ts
addSecurityScopes(name: string, scopes: string[]): this;
```

## description

```ts
description(description: string): this;
```

## deprecated

```ts
deprecated(deprecated: boolean): this;
```

## addAllowedGroupsParameter

```ts
addAllowedGroupsParameter(allowedGroups: string[]): this;
```

## parameters

```ts
parameters(parameters: JsonParameter[]): this;
```

## addParameter

```ts
addParameter(index: number, parameter: JsonParameter): void;
```

## consumes

```ts
consumes(consumes: string[]): this;
```

## produces

```ts
produces(produces: string[]): this;
```

## addProduce

```ts
addProduce(produce: string): void;
```

## addOperationPath

```ts
addOperationPath(method: string, path: string | RegExp): JsonMethodPath;
```

## getAllowedOperationPath

```ts
getAllowedOperationPath(allowedVerbs?: string[]): JsonMethodPath[];
```
