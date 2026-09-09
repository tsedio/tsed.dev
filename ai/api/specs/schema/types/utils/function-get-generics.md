---
title: getGenerics from @tsed/schema
description: api documentation of getGenerics from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation getGenerics function
---
# getGenerics - @tsed/schema

## Usage

```typescript
import { getGenerics } from "@tsed/schema";
```

> See [/packages/specs/schema/src/utils/generics.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/utils/generics.ts#L0-L0).

## Overview

```ts
function getGenerics(value: JsonSchema, options: JsonSchemaOptions): import("@tsed/schema").GenericsMap | undefined;
```

<!-- Description -->

## Description

Resolve generic bindings for the current compilation.

Local generics attached to the `JsonSchema` instance take precedence over the
externally provided `options.generics` bindings.
