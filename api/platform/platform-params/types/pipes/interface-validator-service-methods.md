---
url: >-
  /api/platform/platform-params/types/pipes/interface-validator-service-methods.md
description: api documentation of ValidatorServiceMethods from @tsed/platform-params
---

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

## readonly name

```ts
readonly name: string;
```

## validate

```ts
validate(value: any, options: any): Promise<any>;
```
