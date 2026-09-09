---
title: OpenAPIService from @tsed/openapi-utils
description: api documentation of OpenAPIService from @tsed/openapi-utils
meta:
 - name: keywords
   description: api typescript node.js documentation OpenAPIService class
---
# OpenAPIService - @tsed/openapi-utils

## Usage

```typescript
import { OpenAPIService } from "@tsed/openapi-utils";
```

> See [/packages/specs/openapi-utils/src/services/OpenAPIService.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openapi-utils/src/services/OpenAPIService.ts#L0-L0).

## Overview

```ts
class OpenAPIService {
    protected platform: Platform;
    constructor();
    getOpenAPISpec(conf: OpenAPI3Settings): Promise<OpenSpec3>;
    getOpenAPISpec(conf: Swagger2Settings): Promise<OpenSpec2>;
    getOpenAPISpec(conf: OpenApiSettings): Promise<OpenSpec2>;
    writeOpenAPISpec(conf: OpenApiSettings): Promise<void>;
}
```

<!-- Members -->

## protected platform

```ts
protected platform: Platform;
```

## getOpenAPISpec

```ts
getOpenAPISpec(conf: OpenAPI3Settings): Promise<OpenSpec3>;
```

Generate Spec for the given configuration

## getOpenAPISpec

```ts
getOpenAPISpec(conf: Swagger2Settings): Promise<OpenSpec2>;
```

## getOpenAPISpec

```ts
getOpenAPISpec(conf: OpenApiSettings): Promise<OpenSpec2>;
```

## writeOpenAPISpec

```ts
writeOpenAPISpec(conf: OpenApiSettings): Promise<void>;
```
