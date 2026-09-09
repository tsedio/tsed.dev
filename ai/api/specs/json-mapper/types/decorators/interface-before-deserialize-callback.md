---
title: BeforeDeserializeCallback from @tsed/json-mapper
description: api documentation of BeforeDeserializeCallback from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation BeforeDeserializeCallback interface
---
# BeforeDeserializeCallback - @tsed/json-mapper

## Usage

```typescript
import { BeforeDeserializeCallback } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/decorators/beforeDeserialize.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/decorators/beforeDeserialize.ts#L0-L0).

## Overview

```ts
interface BeforeDeserializeCallback {
    (value: any, ctx: JsonHookContext): any;
}
```

<!-- Members -->

##

```ts
(value: any, ctx: JsonHookContext): any;
```
