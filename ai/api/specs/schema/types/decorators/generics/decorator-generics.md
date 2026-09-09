---
title: Generics from @tsed/schema
description: api documentation of Generics from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Generics decorator
---
# Generics - @tsed/schema

## Usage

```typescript
import { Generics } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/generics/generics.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/generics/generics.ts#L0-L0).

## Overview

```ts
function Generics(...genericLabels: string[]): ClassDecorator;
```

<!-- Description -->

## Description

Define generics list. This list is used by [GenericOf](/ai/api/specs/schema/types/decorators/generics/decorator-generic-of.md) and the [compile](/ai/api/specs/schema/types/fn/function-compile.md) function to build the correct JsonSchema.

See [GenericOf](/ai/api/specs/schema/types/decorators/generics/decorator-generic-of.md) decorator for more details.
