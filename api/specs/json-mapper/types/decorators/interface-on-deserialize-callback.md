---
url: /api/specs/json-mapper/types/decorators/interface-on-deserialize-callback.md
description: api documentation of OnDeserializeCallback from @tsed/json-mapper
---

## Usage

```typescript
import { OnDeserializeCallback } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/decorators/onDeserialize.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/decorators/onDeserialize.ts#L0-L0).

## Overview

```ts
interface OnDeserializeCallback {
    (value: any, ctx: JsonHookContext): any;
}
```

##

```ts
(value: any, ctx: JsonHookContext): any;
```
