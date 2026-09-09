---
url: >-
  /api/specs/json-mapper/types/decorators/interface-after-deserialize-callback.md
description: api documentation of AfterDeserializeCallback from @tsed/json-mapper
---

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

##

```ts
(value: any, ctx: JsonHookContext): any;
```
