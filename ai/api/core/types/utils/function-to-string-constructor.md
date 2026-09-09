---
title: toStringConstructor from @tsed/core
description: api documentation of toStringConstructor from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation toStringConstructor function
---
# toStringConstructor - @tsed/core

## Usage

```typescript
import { toStringConstructor } from "@tsed/core";
```

> See [/packages/core/src/utils/toStringConstructor.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/toStringConstructor.ts#L0-L0).

## Overview

```ts
function toStringConstructor(target: any): string;
```

-   **target** (`any`): Instance or constructor.

<!-- Description -->

## Description

Returns the textual signature of a class/instance constructor.

Example output: `constructor(id: string, name?: string)`.
Useful for debugging and documentation generation.
