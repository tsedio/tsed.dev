---
title: generic from @tsed/schema
description: api documentation of generic from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation generic function
---
# generic - @tsed/schema

## Usage

```typescript
import { generic } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/generic.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/generic.ts#L0-L0).

## Overview

```ts
function generic(type?: Type<any>): {
    of: {
        (generics: GenericsMap): ReturnType<typeof from>;
        (generic: GenericValue): ReturnType<typeof from>;
        (...generics: Array<GenericValue[] | GenericValue>): ReturnType<typeof from>;
    };
};
```

<!-- Members -->

## of

```ts
of: {
     (generics: GenericsMap): ReturnType<typeof from>;
     (generic: GenericValue): ReturnType<typeof from>;
     (...generics: Array<GenericValue[] | GenericValue>): ReturnType<typeof from>;
 };
```
