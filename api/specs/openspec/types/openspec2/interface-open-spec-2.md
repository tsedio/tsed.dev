---
url: /api/specs/openspec/types/openspec2/interface-open-spec-2.md
description: api documentation of OpenSpec2 from @tsed/openspec
---

## Usage

```typescript
import { OpenSpec2 } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec2/OpenSpec2.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec2/OpenSpec2.ts#L0-L0).

## Overview

```ts
interface OpenSpec2 {
    swagger: string;
    info?: OpenSpecInfo;
    host?: string;
    basePath?: string;
    schemes?: ("http" | "https" | "ws" | "wss")[];
    consumes?: string[];
    produces?: string[];
    paths?: OpenSpecHash<OS2Paths>;
    definitions?: OpenSpecHash<OS2Schema>;
    parameters?: OpenSpecHash<OS2BodyParameter | OS2QueryParameter>;
    responses?: OpenSpecHash<OS2Response>;
    security?: OpenSpecSecurity;
    securityDefinitions?: OpenSpecHash<OS2Security>;
    tags?: OpenSpecTag[];
    externalDocs?: OpenSpecExternalDocs;
}
```

## swagger

```ts
swagger: string;
```

Specifies the Swagger Specification version being used. It can be used by the Swagger UI and other clients to interpret the API listing. The value MUST be "2.0".

## info

```ts
info?: OpenSpecInfo;
```

Provides metadata about the API. The metadata can be used by the clients if needed.

## host

```ts
host?: string;
```

The host (name or ip) serving the API. This MUST be the host only and does not include the scheme nor sub-paths. It MAY include a port. If the host is not included, the host serving the documentation is to be used (including the port). The host does not support [path templating](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#pathTemplating).

## basePath

```ts
basePath?: string;
```

The base path on which the API is served, which is relative to the host. If it is not included, the API is served directly under the host. The value MUST start with a leading slash (/). The basePath does not support path [path templating](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#pathTemplating).

## schemes:

```ts
schemes?: ("http" | "https" | "ws" | "wss")[];
```

The transfer protocol of the API. Values MUST be from the list: `http`, `https`, `ws`, `wss`. If the schemes is not included, the default scheme to be used is the one used to access the Swagger definition itself.

## consumes

```ts
consumes?: string[];
```

A list of MIME types the APIs can consume. This is global to all APIs but can be overridden on specific API calls. Value MUST be as described under [Mime Types](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#mimeTypes).

## produces

```ts
produces?: string[];
```

A list of MIME types the APIs can produce. This is global to all APIs but can be overridden on specific API calls. Value MUST be as described under [Mime Types](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#mimeTypes).

## paths

```ts
paths?: OpenSpecHash<OS2Paths>;
```

The available paths and operations for the API.

## definitions

```ts
definitions?: OpenSpecHash<OS2Schema>;
```

An object to hold data types produced and consumed by operations.

## parameters

```ts
parameters?: OpenSpecHash<OS2BodyParameter | OS2QueryParameter>;
```

An object to hold parameters that can be used across operations. This property does not define global parameters for all operations.

## responses

```ts
responses?: OpenSpecHash<OS2Response>;
```

An object to hold responses that can be used across operations. This property does not define global responses for all operations.

## security

```ts
security?: OpenSpecSecurity;
```

A declaration of which security schemes are applied for the API as a whole. The list of values describes alternative security schemes that can be used (that is, there is a logical OR between the security requirements). Individual operations can override this definition.

## securityDefinitions

```ts
securityDefinitions?: OpenSpecHash<OS2Security>;
```

Security scheme definitions that can be used across the specification.

## tags

```ts
tags?: OpenSpecTag[];
```

A list of tags used by the specification with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the Operation Object must be declared. The tags that are not declared may be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique.

## externalDocs

```ts
externalDocs?: OpenSpecExternalDocs;
```

Additional external documentation.
