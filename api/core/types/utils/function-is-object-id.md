---
url: /api/core/types/utils/function-is-object-id.md
description: api documentation of isObjectID from @tsed/core
---

## Usage

```typescript
import { isObjectID } from "@tsed/core";
```

> See [/packages/core/src/utils/isMongooseObject.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isMongooseObject.ts#L0-L0).

## Overview

```ts
function isObjectID(obj: any): boolean;
```

## Description

Checks if an object is a MongoDB ObjectID by verifying the \_bsontype property.
