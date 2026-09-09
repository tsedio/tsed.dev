---
url: /api/specs/schema/types/fn/oas/function-compile-spec.md
description: api documentation of compileSpec from @tsed/schema
---

## Usage

```typescript
import { compileSpec } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/oas/compileSpec.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/oas/compileSpec.ts#L0-L0).

## Overview

```ts
function compileSpec(model: Type<any>, options?: SpecSerializerOptions): Partial<OpenSpec3>;
export function compileSpec(options: GenerateSpecOptions): OpenSpec2 | OpenSpec3;
```
