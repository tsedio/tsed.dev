---
url: /api/specs/json-mapper/types/interfaces/interface-json-mapper-ctx.md
description: api documentation of JsonMapperCtx from @tsed/json-mapper
---

## Usage

```typescript
import { JsonMapperCtx } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/interfaces/JsonMapperMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/interfaces/JsonMapperMethods.ts#L0-L0).

## Overview

```ts
interface JsonMapperCtx<T = any, C = any> {
    collectionType: Type<C> | undefined;
    type: Type<T> | T;
    next: JsonMapperNext;
    options: {
        format?: string;
    };
}
```

## Description

Runtime context passed to mapper methods so they can inspect target types, collection wrappers, and format options.

## collectionType

```ts
collectionType: Type<C> | undefined;
```

## type

```ts
type: Type<T> | T;
```

## next

```ts
next: JsonMapperNext;
```

## options

```ts
options: {
     format?: string;
 };
```
