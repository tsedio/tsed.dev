---
url: /api/specs/openspec/types/openspec3/interface-open-spec-3.md
description: api documentation of OpenSpec3 from @tsed/openspec
---

## Usage

```typescript
import { OpenSpec3 } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OpenSpec3.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OpenSpec3.ts#L0-L0).

## Overview

```ts
interface OpenSpec3<Schema = OS3Schema> {
    openapi: string;
    info: OpenSpecInfo;
    servers?: OS3Server[];
    paths: OpenSpecHash<OS3Paths<Schema>>;
    components?: OS3Components<Schema>;
    security?: OpenSpecSecurity;
    tags?: OpenSpecTag[];
    externalDocs?: OpenSpecExternalDocs;
}
```

## openapi

```ts
openapi: string;
```

This string MUST be the semantic version number of the OpenAPI Specification version that the OpenAPI document uses. The openapi field SHOULD be used by tooling specifications and clients to interpret the OpenAPI document. This is not related to the API info.version string.

## info

```ts
info: OpenSpecInfo;
```

Provides metadata about the API. The metadata MAY be used by tooling as required.

## servers

```ts
servers?: OS3Server[];
```

An array of Server Objects, which provide connectivity information to a target server. If the servers property is not provided, or is an empty array, the default value would be a Server Object with a url value of /.

## paths

```ts
paths: OpenSpecHash<OS3Paths<Schema>>;
```

The available paths and operations for the API.

## components

```ts
components?: OS3Components<Schema>;
```

An element to hold various schemas for the specification.

## security

```ts
security?: OpenSpecSecurity;
```

A declaration of which security mechanisms can be used across the API. The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. Individual operations can override this definition.

## tags

```ts
tags?: OpenSpecTag[];
```

A list of tags used by the specification with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the Operation Object must be declared. The tags that are not declared MAY be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique.

## externalDocs

```ts
externalDocs?: OpenSpecExternalDocs;
```

Additional external documentation.
