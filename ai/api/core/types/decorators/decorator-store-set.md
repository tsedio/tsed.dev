---
title: StoreSet from @tsed/core
description: api documentation of StoreSet from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation StoreSet decorator
---
# StoreSet - @tsed/core

## Usage

```typescript
import { StoreSet } from "@tsed/core";
```

> See [/packages/core/src/decorators/storeSet.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/decorators/storeSet.ts#L0-L0).

## Overview

```ts
function StoreSet(key: any, value: any): Function;
```

<!-- Description -->

## Description

Creates a decorator that sets a key-value pair in the target's Store metadata.

Uses {@link Store.set} internally to directly set the provided value (no merging).
