---
url: /api/specs/openspec/types/openspec3/interface-os-3-components.md
description: api documentation of OS3Components from @tsed/openspec
---

## Usage

```typescript
import { OS3Components } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Components.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Components.ts#L0-L0).

## Overview

```ts
interface OS3Components<Schema = OS3Schema> {
    schemas?: OpenSpecHash<Schema>;
    responses?: OpenSpecHash<OS3Response<Schema>>;
    parameters?: OpenSpecHash<OS3Parameter<Schema>>;
    examples?: OpenSpecHash<OS3Example>;
    requestBodies?: OpenSpecHash<OS3RequestBody<Schema>>;
    headers?: OpenSpecHash<OS3Header<Schema>>;
    securitySchemes?: OpenSpecHash<OS3Security>;
    links?: OpenSpecHash<OS3Link>;
    callbacks?: OS3Callbacks;
}
```

## schemas

```ts
schemas?: OpenSpecHash<Schema>;
```

An object to hold reusable [Schema Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#schemaObject).

## responses

```ts
responses?: OpenSpecHash<OS3Response<Schema>>;
```

An object to hold reusable [Response Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#responseObject).

## parameters

```ts
parameters?: OpenSpecHash<OS3Parameter<Schema>>;
```

An object to hold reusable [Parameter Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterObject).

## examples

```ts
examples?: OpenSpecHash<OS3Example>;
```

An object to hold reusable [Example Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#exampleObject).

## requestBodies

```ts
requestBodies?: OpenSpecHash<OS3RequestBody<Schema>>;
```

An object to hold reusable [Request Body Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#requestBodyObject).

## headers

```ts
headers?: OpenSpecHash<OS3Header<Schema>>;
```

An object to hold reusable [Header Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#headerObject).

## securitySchemes

```ts
securitySchemes?: OpenSpecHash<OS3Security>;
```

An object to hold reusable [Security Scheme Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#securitySchemeObject).

## links

```ts
links?: OpenSpecHash<OS3Link>;
```

An object to hold reusable [Link Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#linkObject).

## callbacks

```ts
callbacks?: OS3Callbacks;
```

An object to hold reusable [Callback Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#callbackObject).
