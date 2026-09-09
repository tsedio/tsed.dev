---
title: AfterDeserializeCallback from @tsed/json-mapper
description: api documentation of AfterDeserializeCallback from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation AfterDeserializeCallback interface
---
# AfterDeserializeCallback - @tsed/json-mapper

## Usage

```typescript
import { AfterDeserializeCallback } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/decorators/afterDeserialize.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/decorators/afterDeserialize.ts#L0-L0).

## Overview

```ts
interface AfterDeserializeCallback {
    (value: any, ctx: JsonHookContext): any;
}
```

<!-- Members -->

##

```ts
(value: any, ctx: JsonHookContext): any;
```
