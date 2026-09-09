---
title: cleanObject from @tsed/core
description: api documentation of cleanObject from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation cleanObject function
---
# cleanObject - @tsed/core

## Usage

```typescript
import { cleanObject } from "@tsed/core";
```

> See [/packages/core/src/utils/cleanObject.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/cleanObject.ts#L0-L0).

## Overview

```ts
function cleanObject(obj: Record<string, unknown>, ignore?: string[]): any;
```

<!-- Description -->

## Description

Returns a copy of an object with undefined values, protected keys, and ignored keys removed.

Filters out entries that are undefined, match protected key patterns, or are in the ignore list.
