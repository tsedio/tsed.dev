---
title: PipeMethods from @tsed/schema
description: api documentation of PipeMethods from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation PipeMethods interface
---
# PipeMethods - @tsed/schema

## Usage

```typescript
import { PipeMethods } from "@tsed/schema";
```

> See [/packages/specs/schema/src/components/stores/JsonParameterStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/components/stores/JsonParameterStore.ts#L0-L0).

## Overview

```ts
interface PipeMethods<T = any, R = any> {
    transform(value: T, metadata: JsonParameterStore): R;
}
```

<!-- Description -->

## Description

Interface for pipe classes that transform parameter values.

Pipes are called by the framework to transform or validate parameter values
before they reach the method handler.

### Usage

```typescript
class ParseIntPipe implements PipeMethods<string, number> {
  transform(value: string, metadata: JsonParameterStore): number {
    return parseInt(value, 10);
  }
}
```

<!-- Members -->

## transform

```ts
transform(value: T, metadata: JsonParameterStore): R;
```
