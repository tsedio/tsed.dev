---
url: /api/specs/ajv/types/utils/function-default-error-formatter.md
description: api documentation of defaultErrorFormatter from @tsed/ajv
---

## Usage

```typescript
import { defaultErrorFormatter } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/utils/defaultErrorFormatter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/utils/defaultErrorFormatter.ts#L0-L0).

## Overview

```ts
function defaultErrorFormatter(error: AjvErrorObject & {
    dataPath: string;
}): string;
```

## dataPath

```ts
dataPath: string;
```
