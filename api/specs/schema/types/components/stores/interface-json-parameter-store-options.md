---
url: >-
  /api/specs/schema/types/components/stores/interface-json-parameter-store-options.md
description: api documentation of JsonParameterStoreOptions from @tsed/schema
---

## Usage

```typescript
import { JsonParameterStoreOptions } from "@tsed/schema";
```

> See [/packages/specs/schema/src/components/stores/JsonParameterStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/components/stores/JsonParameterStore.ts#L0-L0).

## Overview

```ts
interface JsonParameterStoreOptions extends JsonEntityStoreOptions {
    dataPath?: string;
    paramType?: string;
    expression?: string;
}
```

## Description

Configuration options for creating a JsonParameterStore.

## dataPath

```ts
dataPath?: string;
```

## paramType

```ts
paramType?: string;
```

## expression

```ts
expression?: string;
```
