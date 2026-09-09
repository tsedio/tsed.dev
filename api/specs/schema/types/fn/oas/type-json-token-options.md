---
url: /api/specs/schema/types/fn/oas/type-json-token-options.md
description: api documentation of JsonTokenOptions from @tsed/schema
---

## Usage

```typescript
import { JsonTokenOptions } from "@tsed/specs/schema/src/fn/oas/getSpec";
```

> See [/packages/specs/schema/src/fn/oas/getSpec.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/oas/getSpec.ts#L0-L0).

## Overview

```ts
type JsonTokenOptions = ({
    token: Type<any>;
} & Partial<SpecSerializerOptions>)[];
```

## token

```ts
token: Type<any>;
```
