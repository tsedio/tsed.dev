---
title: GenericsMap from @tsed/schema
description: api documentation of GenericsMap from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation GenericsMap type
---
# GenericsMap - @tsed/schema

## Usage

```typescript
import { GenericsMap } from "@tsed/specs/schema/src/domain/Generics";
```

> See [/packages/specs/schema/src/domain/Generics.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/Generics.ts#L0-L0).

## Overview

```ts
type GenericsMap = Record<string, [GenericValue] | [GenericValue, GenericsMap]>;
```
