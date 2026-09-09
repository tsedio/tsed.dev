---
title: isProtectedKey from @tsed/core
description: api documentation of isProtectedKey from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation isProtectedKey function
---
# isProtectedKey - @tsed/core

## Usage

```typescript
import { isProtectedKey } from "@tsed/core";
```

> See [/packages/core/src/utils/isProtectedKey.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isProtectedKey.ts#L0-L0).

## Overview

```ts
function isProtectedKey(key: string): boolean;
```

<!-- Description -->

## Description

Checks if a key is a protected property name to prevent prototype pollution vulnerabilities.
