---
url: /api/specs/ajv/types/utils/function-map-class-error.md
description: api documentation of mapClassError from @tsed/ajv
---

## Usage

```typescript
import { mapClassError } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/utils/mapClassError.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/utils/mapClassError.ts#L0-L0).

## Overview

```ts
function mapClassError(error: AjvErrorObject, targetType: Type<any>): string | undefined;
```

* **error** (`AjvErrorObject`): AJV error object to transform.

* **targetType** (`Type<any>`): Class used to resolve property metadata.

## Description

Rewrite class-related AJV messages using Ts.ED metadata.

For missing required properties, this method replaces the property key by
the store-resolved property name when aliasing/naming is configured.
