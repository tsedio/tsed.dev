---
title: uniqBy from @tsed/core
description: api documentation of uniqBy from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation uniqBy function
---
# uniqBy - @tsed/core

## Usage

```typescript
import { uniqBy } from "@tsed/core";
```

> See [/packages/core/src/utils/uniq.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/uniq.ts#L0-L0).

## Overview

```ts
function uniqBy<T = any>(list: T[], key?: string): T[];
```

<!-- Description -->

## Description

Returns a new array with duplicate objects removed based on a specified property key.
