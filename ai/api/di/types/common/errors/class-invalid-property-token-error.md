---
title: InvalidPropertyTokenError from @tsed/di
description: api documentation of InvalidPropertyTokenError from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation InvalidPropertyTokenError class
---
# InvalidPropertyTokenError - @tsed/di

## Usage

```typescript
import { InvalidPropertyTokenError } from "@tsed/di";
```

> See [/packages/di/src/common/errors/InvalidPropertyTokenError.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/errors/InvalidPropertyTokenError.ts#L0-L0).

## Overview

```ts
class InvalidPropertyTokenError extends Error {
    name: string;
    constructor(target: any, propertyKey: string);
}
```

<!-- Description -->

## Description

Error thrown when an invalid token is used for property injection.

Typically indicates a circular reference, missing import, or undefined token
in property decorators like `@Inject()` or `@Constant()`.

### Common causes

-   Circular dependency between classes
-   Missing or incorrect import statement
-   Using `undefined` as a token
-   Forward reference not properly handled

<!-- Members -->

## name

```ts
name: string;
```
