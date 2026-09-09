---
url: /api/specs/schema/types/components/stores/type-endpoint-metadata.md
description: api documentation of EndpointMetadata from @tsed/schema
---

## Usage

```typescript
import { EndpointMetadata } from "@tsed/schema";
```

> See [/packages/specs/schema/src/components/stores/JsonMethodStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/components/stores/JsonMethodStore.ts#L0-L0).

## Overview

```ts
type EndpointMetadata = JsonMethodStore;

export const EndpointMetadata: typeof JsonMethodStore;
```

## Description

JsonMethodStore contains metadata about a controller and his method.
Each annotation (@Get, @Body...) attached to a method are stored into endpoint.
JsonMethodStore converts this metadata to an array which contain arguments to call an Express method.

Example :

```ts
@Controller("/my-path")
provide MyClass {

    @Get("/")
    @Authenticated()
    public myMethod(){}
}
```
