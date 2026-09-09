---
title: catchError from @tsed/core
description: api documentation of catchError from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation catchError function
---
# catchError - @tsed/core

## Usage

```typescript
import { catchError } from "@tsed/core";
```

> See [/packages/core/src/utils/catchError.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/catchError.ts#L0-L0).

## Overview

```ts
function catchError<T extends Error>(cb: Function): T | undefined;
```

<!-- Description -->

## Description

Executes a callback and returns any thrown error, or undefined if no error occurred.
