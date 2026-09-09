---
url: /api/specs/schema/types/utils/function-get-schema-from-ref.md
description: api documentation of getSchemaFromRef from @tsed/schema
---

## Usage

```typescript
import { getSchemaFromRef } from "@tsed/schema";
```

> See [/packages/specs/schema/src/utils/ref.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/utils/ref.ts#L0-L0).

## Overview

```ts
function getSchemaFromRef($ref: string | undefined, options: JsonSchemaOptions): JSONSchema7 | undefined;
```
