---
title: compile from @tsed/schema
description: api documentation of compile from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation compile function
---
# compile - @tsed/schema

## Usage

```typescript
import { compile } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/compile.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/compile.ts#L0-L0).

## Overview

```ts
function compile(model: Type<any> | JsonParameterStore | JsonSchema<any>, options?: JsonSchemaOptions): any;
```

-   **model** (`Type<any>` | `JsonParameterStore` | `JsonSchema<any>`): Class, parameter store, or `JsonSchema` to compile.

-   **options** (`JsonSchemaOptions`): Optional. JSON schema generation options.

<!-- Description -->

## Description

Compile a class, parameter store, or `JsonSchema` into a plain JSON schema object.

This is an alias of `getJsonSchema(...)`.
