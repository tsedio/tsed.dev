---
url: /api/specs/ajv/types/fn/type-keyword-options.md
description: api documentation of KeywordOptions from @tsed/ajv
---

## Usage

```typescript
import { KeywordOptions } from "@tsed/specs/ajv/src/fn/keyword";
```

> See [/packages/specs/ajv/src/fn/keyword.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/fn/keyword.ts#L0-L0).

## Overview

```ts
type KeywordOptions = Partial<Omit<KeywordDefinition, "metaSchema">> & {
    metaSchema?: AnySchemaObject | JsonSchema;
};
```

## metaSchema

```ts
metaSchema?: AnySchemaObject | JsonSchema;
```
