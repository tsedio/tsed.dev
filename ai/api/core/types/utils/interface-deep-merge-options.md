---
title: DeepMergeOptions from @tsed/core
description: api documentation of DeepMergeOptions from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation DeepMergeOptions interface
---
# DeepMergeOptions - @tsed/core

## Usage

```typescript
import { DeepMergeOptions } from "@tsed/core";
```

> See [/packages/core/src/utils/deepMerge.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/deepMerge.ts#L0-L0).

## Overview

```ts
interface DeepMergeOptions {
    reducers?: Record<string, DeepMergeReducerCB>;
    parentKey?: string;
    cleanUndefinedProps?: boolean;
    alter?: (key: string, value: any) => any;
}
```

<!-- Description -->

## Description

Configuration options for deep merge operations.

<!-- Members -->

## reducers

```ts
reducers?: Record<string, DeepMergeReducerCB>;
```

## parentKey

```ts
parentKey?: string;
```

## cleanUndefinedProps

```ts
cleanUndefinedProps?: boolean;
```

## alter:

```ts
alter?: (key: string, value: any) => any;
```
