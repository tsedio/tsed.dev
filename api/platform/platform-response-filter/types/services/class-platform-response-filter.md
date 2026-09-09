---
url: >-
  /api/platform/platform-response-filter/types/services/class-platform-response-filter.md
description: >-
  api documentation of PlatformResponseFilter from
  @tsed/platform-response-filter
---

## Usage

```typescript
import { PlatformResponseFilter } from "@tsed/platform-response-filter";
```

> See [/packages/platform/platform-response-filter/src/services/PlatformResponseFilter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-response-filter/src/services/PlatformResponseFilter.ts#L0-L0).

## Overview

```ts
class PlatformResponseFilter {
    protected additionalProperties: boolean | undefined;
    protected container: {
        contentTypes: string[];
        resolve(bestContentType: string): import("../index.js").ResponseFilterMethods<unknown> | undefined;
    };
    protected contentTypeResolver: (data: any, ctx: BaseContext) => string;
    transform(data: unknown, $ctx: BaseContext): Promise<unknown>;
    protected renderView(data: unknown, $ctx: BaseContext): Promise<any>;
    protected serialize(data: unknown, ctx: BaseContext): Promise<unknown>;
    protected resolve(data: any, ctx: BaseContext): any;
    protected getIncludes(ctx: BaseContext): string[] | undefined;
}
```

## Description

PlatformResponseFilter is responsible for transforming the response data
to the appropriate format based on the endpoint metadata and context.

## protected additionalProperties

```ts
protected additionalProperties: boolean | undefined;
```

## protected container

```ts
protected container: {
     contentTypes: string[];
     resolve(bestContentType: string): import("../index.js").ResponseFilterMethods<unknown> | undefined;
 };
```

## protected contentTypeResolver:

```ts
protected contentTypeResolver: (data: any, ctx: BaseContext) => string;
```

## transform

```ts
transform(data: unknown, $ctx: BaseContext): Promise<unknown>;
```

* **data** (`unknown`): The data to transform.

* **$ctx** (\`\`): The context.

Transform the data to the right format.

## protected renderView

```ts
protected renderView(data: unknown, $ctx: BaseContext): Promise<any>;
```

* **data** (`unknown`): The data to render.

* **$ctx** (\`\`): The context.

Render the view with the given data.

## protected serialize

```ts
protected serialize(data: unknown, ctx: BaseContext): Promise<unknown>;
```

Serialize data before calling filters

## protected resolve

```ts
protected resolve(data: any, ctx: BaseContext): any;
```

## protected getIncludes

```ts
protected getIncludes(ctx: BaseContext): string[] | undefined;
```
