---
title: SpecSerializerOptions from @tsed/schema
description: api documentation of SpecSerializerOptions from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation SpecSerializerOptions interface
---
# SpecSerializerOptions - @tsed/schema

## Usage

```typescript
import { SpecSerializerOptions } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/oas/getSpec.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/oas/getSpec.ts#L0-L0).

## Overview

```ts
interface SpecSerializerOptions extends JsonSchemaOptions {
    paths?: Record<string, any>;
    channels?: Record<string, any>;
    rootPath?: string;
    operationIdFormatter?: (name: string, propertyKey: string, path: string) => string;
    operationIdPattern?: string;
}
```

<!-- Members -->

## paths

```ts
paths?: Record<string, any>;
```

Paths

## channels

```ts
channels?: Record<string, any>;
```

Channels

## rootPath

```ts
rootPath?: string;
```

Root path. This paths will be added to all generated paths Object.

## operationIdFormatter:

```ts
operationIdFormatter?: (name: string, propertyKey: string, path: string) => string;
```

A function to generate the operationId.

## operationIdPattern

```ts
operationIdPattern?: string;
```

A pattern to generate the operationId.
