---
title: ParamFn from @tsed/platform-params
description: api documentation of ParamFn from @tsed/platform-params
meta:
 - name: keywords
   description: api typescript node.js documentation ParamFn decorator
---
# ParamFn - @tsed/platform-params

## Usage

```typescript
import { ParamFn } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/decorators/paramFn.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/decorators/paramFn.ts#L0-L0).

## Overview

```ts
function ParamFn(fn: (param: JsonParameterStore, parameters: DecoratorParameters) => void): ParameterDecorator;
```

<!-- Description -->

## Description

Get the Param metadata. Use this decorator to compose your own decorator.
