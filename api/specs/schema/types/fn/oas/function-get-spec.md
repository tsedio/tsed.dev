---
url: /api/specs/schema/types/fn/oas/function-get-spec.md
description: api documentation of getSpec from @tsed/schema
---

## Usage

```typescript
import { getSpec } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/oas/getSpec.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/oas/getSpec.ts#L0-L0).

## Overview

```ts
function getSpec(model: Type<any> | JsonTokenOptions, options?: SpecSerializerOptions): Partial<OpenSpec3>;
```

## Description

Return the swagger or open spec for the given class.
