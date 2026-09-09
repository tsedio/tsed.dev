---
title: getGenericsOptions from @tsed/schema
description: api documentation of getGenericsOptions from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation getGenericsOptions function
---
# getGenericsOptions - @tsed/schema

## Usage

```typescript
import { getGenericsOptions } from "@tsed/schema";
```

> See [/packages/specs/schema/src/utils/generics.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/utils/generics.ts#L0-L0).

## Overview

```ts
function getGenericsOptions(value: JsonSchema, options: JsonSchemaOptions): {
    generics: import("@tsed/schema").GenericsMap | undefined;
    mapper: string;
};
```

<!-- Description -->

## Description

Resolve generic bindings and the mapper strategy associated with their
origin.

<!-- Members -->

## generics: import

```ts
generics: import("@tsed/schema").GenericsMap | undefined;
```

## mapper

```ts
mapper: string;
```
