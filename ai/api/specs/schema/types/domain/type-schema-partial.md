---
title: SchemaPartial from @tsed/schema
description: api documentation of SchemaPartial from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation SchemaPartial type
---
# SchemaPartial - @tsed/schema

## Usage

```typescript
import { SchemaPartial } from "@tsed/specs/schema/src/domain/types";
```

> See [/packages/specs/schema/src/domain/types.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/types.ts#L0-L0).

## Overview

```ts
type SchemaPartial<T> = [ObjectPortion<T>] extends [never] ? T : NonObjectPortion<T> extends never ? ObjectPartial<T> : ObjectPartial<T> | NonObjectPortion<T>;
```
