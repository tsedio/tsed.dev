---
title: KeywordOptions from @tsed/ajv
description: api documentation of KeywordOptions from @tsed/ajv
meta:
 - name: keywords
   description: api typescript node.js documentation KeywordOptions type
---
# KeywordOptions - @tsed/ajv

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

<!-- Members -->

## metaSchema

```ts
metaSchema?: AnySchemaObject | JsonSchema;
```
