---
title: AbstractType from @tsed/core
description: api documentation of AbstractType from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation AbstractType interface
---
# AbstractType - @tsed/core

## Usage

```typescript
import { AbstractType } from "@tsed/core";
```

> See [/packages/core/src/types/Type.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/types/Type.ts#L0-L0).

## Overview

```ts
interface AbstractType<T> extends Function {
    prototype: T;
}
```

<!-- Description -->

## Description

Describes an abstract type (abstract class), useful for declaring dependencies that should not be instantiated directly.

<!-- Members -->

## prototype

```ts
prototype: T;
```
