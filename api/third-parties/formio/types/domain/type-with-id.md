---
url: /api/third-parties/formio/types/domain/type-with-id.md
description: api documentation of WithID from @tsed/formio
---

## Usage

```typescript
import { WithID } from "@tsed/third-parties/formio/src/domain/FormioModels";
```

> See [/packages/third-parties/formio/src/domain/FormioModels.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioModels.ts#L0-L0).

## Overview

```ts
type WithID<T> = T & {
    _id: string;
};
```

## \_id

```ts
_id: string;
```
