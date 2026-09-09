---
url: /api/specs/ajv/types/interfaces/type-error-formatter.md
description: api documentation of ErrorFormatter from @tsed/ajv
---

## Usage

```typescript
import { ErrorFormatter } from "@tsed/specs/ajv/src/interfaces/AjvSettings";
```

> See [/packages/specs/ajv/src/interfaces/AjvSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/interfaces/AjvSettings.ts#L0-L0).

## Overview

```ts
type ErrorFormatter = (error: AjvErrorObject) => string;
```
