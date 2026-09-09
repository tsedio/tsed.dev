---
title: isEnumerable from @tsed/core
description: api documentation of isEnumerable from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation isEnumerable function
---
# isEnumerable - @tsed/core

## Usage

```typescript
import { isEnumerable } from "@tsed/core";
```

> See [/packages/core/src/utils/isEnumerable.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isEnumerable.ts#L0-L0).

## Overview

```ts
function isEnumerable(obj: any, key: string): boolean | undefined;
```

<!-- Description -->

## Description

Checks if a property is enumerable on an object, considering its prototype chain.
