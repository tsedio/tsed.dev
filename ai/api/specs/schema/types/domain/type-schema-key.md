---
title: SchemaKey from @tsed/schema
description: api documentation of SchemaKey from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation SchemaKey type
---
# SchemaKey - @tsed/schema

## Usage

```typescript
import { SchemaKey } from "@tsed/specs/schema/src/domain/types";
```

> See [/packages/specs/schema/src/domain/types.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/types.ts#L0-L0).

## Overview

```ts
type SchemaKey<T> = ObjectKeys<T> extends never ? string : Extract<ObjectKeys<T>, string>;
```
