---
url: /api/specs/schema/types/domain/type-generic-value.md
description: api documentation of GenericValue from @tsed/schema
---

## Usage

```typescript
import { GenericValue } from "@tsed/specs/schema/src/domain/Generics";
```

> See [/packages/specs/schema/src/domain/Generics.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/Generics.ts#L0-L0).

## Overview

```ts
type GenericValue = Type<any> | JsonSchema | String | Number | Boolean | Object | Date;
```
