---
title: JsonMethodPath from @tsed/schema
description: api documentation of JsonMethodPath from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation JsonMethodPath class
---
# JsonMethodPath - @tsed/schema

## Usage

```typescript
import { JsonMethodPath } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonOperation.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonOperation.ts#L0-L0).

## Overview

```ts
class JsonMethodPath extends JsonMap<any> {
    method: string;
    path: string | RegExp;
    constructor(method: string, path: string | RegExp);
    summary(summary: string): this;
    description(description: string): this;
}
```

<!-- Description -->

## Description

Represents an HTTP operation path with metadata for OpenAPI specifications.

This class associates an HTTP method and path with operation-level metadata
such as summary and description. It's used internally to manage routing
information for API endpoints.

<!-- Members -->

## method

```ts
method: string;
```

## path

```ts
path: string | RegExp;
```

## summary

```ts
summary(summary: string): this;
```

## description

```ts
description(description: string): this;
```
