---
url: /api/third-parties/formio/types/domain/interface-formio-actions-index.md
description: api documentation of FormioActionsIndex from @tsed/formio
---

## Usage

```typescript
import { FormioActionsIndex } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioActionsIndex.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioActionsIndex.ts#L0-L0).

## Overview

```ts
interface FormioActionsIndex {
    actions: FormioActions & Record<string, Type<FormioActionModelCtor>>;
}
```

## actions

```ts
actions: FormioActions & Record<string, Type<FormioActionModelCtor>>;
```
