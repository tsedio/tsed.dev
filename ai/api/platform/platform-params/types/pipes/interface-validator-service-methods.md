---
title: ValidatorServiceMethods from @tsed/platform-params
description: api documentation of ValidatorServiceMethods from @tsed/platform-params
meta:
 - name: keywords
   description: api typescript node.js documentation ValidatorServiceMethods interface
---
# ValidatorServiceMethods - @tsed/platform-params

## Usage

```typescript
import { ValidatorServiceMethods } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/pipes/ValidationPipe.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/pipes/ValidationPipe.ts#L0-L0).

## Overview

```ts
interface ValidatorServiceMethods {
    readonly name: string;
    validate(value: any, options: any): Promise<any>;
}
```

<!-- Members -->

## readonly name

```ts
readonly name: string;
```

## validate

```ts
validate(value: any, options: any): Promise<any>;
```
