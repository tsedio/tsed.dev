---
title: JsonParameterStoreOptions from @tsed/schema
description: api documentation of JsonParameterStoreOptions from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation JsonParameterStoreOptions interface
---
# JsonParameterStoreOptions - @tsed/schema

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

<!-- Description -->

## Description

Configuration options for creating a JsonParameterStore.

<!-- Members -->

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
