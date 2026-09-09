---
title: OS3Operation from @tsed/openspec
description: api documentation of OS3Operation from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS3Operation interface
---
# OS3Operation - @tsed/openspec

## Usage

```typescript
import { OS3Operation } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Operation.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Operation.ts#L0-L0).

## Overview

```ts
interface OS3Operation<Schema = OS3Schema, Parameter = OS3Parameter<Schema>, Response = OpenSpecHash<OS3Response<Schema>>> {
    operationId: string;
    description?: string;
    summary?: string;
    tags?: string[];
    externalDocs?: OpenSpecExternalDocs;
    parameters?: Parameter[];
    requestBody?: OS3RequestBody<Schema>;
    responses: Response;
    deprecated?: boolean;
    security?: OpenSpecSecurity;
    servers?: OS3Server[];
    callbacks?: OS3Callbacks<Schema>;
}
```

<!-- Members -->

## operationId

```ts
operationId: string;
```

Unique string used to identify the operation. The id MUST be unique among all operations described in the API. Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is RECOMMENDED to follow common programming naming conventions.

## description

```ts
description?: string;
```

A verbose explanation of the operation behavior. CommonMark syntax MAY be used for rich text representation.

## summary

```ts
summary?: string;
```

A short summary of what the operation does.

## tags

```ts
tags?: string[];
```

A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier.

## externalDocs

```ts
externalDocs?: OpenSpecExternalDocs;
```

Additional external documentation for this operation.

## parameters

```ts
parameters?: Parameter[];
```

A list of parameters that are applicable for this operation. If a parameter is already defined at the [Path Item](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#pathItemParameters),
the new definition will override it but can never remove it.
The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a [name](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterName) and (location)\[https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterIn].
The list can use the [Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#referenceObject) to link to parameters that are defined at the [OpenAPI Object's components/parameters](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#componentsParameters).

## requestBody

```ts
requestBody?: OS3RequestBody<Schema>;
```

The request body applicable for this operation.
The requestBody is only supported in HTTP methods where the HTTP 1.1 specification [RFC7231](https://tools.ietf.org/html/rfc7231#section-4.3.1) has explicitly defined semantics for request bodies.
In other cases where the HTTP spec is vague, requestBody SHALL be ignored by consumers.

## responses

```ts
responses: Response;
```

The list of possible responses as they are returned from executing this operation.

## deprecated

```ts
deprecated?: boolean;
```

Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default value is false.

## security

```ts
security?: OpenSpecSecurity;
```

A declaration of which security mechanisms can be used for this operation. The list of values includes alternative security requirement objects that can be used.
Only one of the security requirement objects need to be satisfied to authorize a request.
This definition overrides any declared top-level [security](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#oasSecurity). To remove a top-level security declaration, an empty array can be used.

## servers

```ts
servers?: OS3Server[];
```

An alternative server array to service this operation. If an alternative server object is specified at the Path Item Object or Root level, it will be overridden by this value.

## callbacks

```ts
callbacks?: OS3Callbacks<Schema>;
```

A map of possible out-of band callbacks related to the parent operation.
The key is a unique identifier for the [Callback Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#callbackObject).
Each value in the map is a Callback Object that describes a request that may be initiated by the API provider and the expected responses.
The key value used to identify the callback object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.
