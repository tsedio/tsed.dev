---
title: WithID from @tsed/formio
description: api documentation of WithID from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation WithID type
---
# WithID - @tsed/formio

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

<!-- Members -->

## \_id

```ts
_id: string;
```
