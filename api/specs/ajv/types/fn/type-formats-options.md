---
url: /api/specs/ajv/types/fn/type-formats-options.md
description: api documentation of FormatsOptions from @tsed/ajv
---

## Usage

```typescript
import { FormatsOptions } from "@tsed/specs/ajv/src/fn/formats";
```

> See [/packages/specs/ajv/src/fn/formats.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/fn/formats.ts#L0-L0).

## Overview

```ts
type FormatsOptions = Omit<FormatDefinition<any>, "validate" | "compare"> | Omit<AsyncFormatDefinition<any>, "validate" | "compare">;
```
