---
title: AnyDecorator from @tsed/core
description: api documentation of AnyDecorator from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation AnyDecorator type
---
# AnyDecorator - @tsed/core

## Usage

```typescript
import { AnyDecorator } from "@tsed/core/src/types/AnyDecorator";
```

> See [/packages/core/src/types/AnyDecorator.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/types/AnyDecorator.ts#L0-L0).

## Overview

```ts
type AnyDecorator = any | ClassDecorator | MethodDecorator | PropertyDescriptor | ParameterDecorator;
```

<!-- Description -->

## Description

Utility union representing any decorator type supported by TypeScript.

Used by Ts.ED to type APIs that accept class, method, property or parameter
decorators. This type is handy when a helper must remain generic with regard
to the decorated target.
