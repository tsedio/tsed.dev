---
url: /api/specs/schema/types/decorators/generics/decorator-generics.md
description: api documentation of Generics from @tsed/schema
---

## Usage

```typescript
import { Generics } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/generics/generics.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/generics/generics.ts#L0-L0).

## Overview

```ts
function Generics(...genericLabels: string[]): ClassDecorator;
```

## Description

Define generics list. This list is used by @@GenericOf@@ and the @@compile@@ function to build the correct JsonSchema.

See @@GenericOf@@ decorator for more details.
