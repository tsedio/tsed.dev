---
title: UsePipe from @tsed/platform-params
description: api documentation of UsePipe from @tsed/platform-params
meta:
 - name: keywords
   description: api typescript node.js documentation UsePipe decorator
---
# UsePipe - @tsed/platform-params

## Usage

```typescript
import { UsePipe } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/decorators/usePipe.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/decorators/usePipe.ts#L0-L0).

## Overview

```ts
function UsePipe(token: Type<PipeMethods>, options?: any): ParameterDecorator;
```

<!-- Description -->

## Description

Register a Pipe to be used with the current decorated param.
