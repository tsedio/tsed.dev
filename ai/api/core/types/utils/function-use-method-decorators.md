---
title: useMethodDecorators from @tsed/core
description: api documentation of useMethodDecorators from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation useMethodDecorators function
---
# useMethodDecorators - @tsed/core

## Usage

```typescript
import { useMethodDecorators } from "@tsed/core";
```

> See [/packages/core/src/utils/useMethodDecorators.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/useMethodDecorators.ts#L0-L0).

## Overview

```ts
function useMethodDecorators(...decorators: AnyDecorator[]): (target: any, propertyKey: string | symbol) => void;
```

<!-- Description -->

## Description

Combines multiple method decorators into a single decorator with proper descriptor handling.
