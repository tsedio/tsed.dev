---
url: /api/specs/json-mapper/types/decorators/interface-on-serialize-callback.md
description: api documentation of OnSerializeCallback from @tsed/json-mapper
---

## Usage

```typescript
import { OnSerializeCallback } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/decorators/onSerialize.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/decorators/onSerialize.ts#L0-L0).

## Overview

```ts
interface OnSerializeCallback {
    (value: any, ctx: JsonHookContext): any;
}
```

##

```ts
(value: any, ctx: JsonHookContext): any;
```
