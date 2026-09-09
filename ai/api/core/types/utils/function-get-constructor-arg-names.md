---
title: getConstructorArgNames from @tsed/core
description: api documentation of getConstructorArgNames from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation getConstructorArgNames function
---
# getConstructorArgNames - @tsed/core

## Usage

```typescript
import { getConstructorArgNames } from "@tsed/core";
```

> See [/packages/core/src/utils/getConstructorArgNames.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/getConstructorArgNames.ts#L0-L0).

## Overview

```ts
function getConstructorArgNames(target: any): string[];
```

<!-- Description -->

## Description

Extracts constructor parameter names from a class constructor.

Parses the constructor's string representation to retrieve parameter names.
Returns an array of trimmed, non-empty parameter names.
