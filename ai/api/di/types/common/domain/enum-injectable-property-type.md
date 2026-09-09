---
title: InjectablePropertyType from @tsed/di
description: api documentation of InjectablePropertyType from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation InjectablePropertyType enum
---
# InjectablePropertyType - @tsed/di

## Usage

```typescript
import { InjectablePropertyType } from "@tsed/di";
```

> See [/packages/di/src/common/domain/InjectablePropertyType.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/domain/InjectablePropertyType.ts#L0-L0).

## Overview

```ts
enum InjectablePropertyType {
    METHOD = "method",
    PROPERTY = "property",
    CONSTANT = "constant",
    VALUE = "value",
    INTERCEPTOR = "interceptor"
}
```

<!-- Description -->

## Description

Enumeration defining types of injectable properties and decorators.

Used internally to track and classify different kinds of injected dependencies
and decorated members within a class.

### Types

-   `METHOD`: Injectable method parameter
-   `PROPERTY`: Injectable class property
-   `CONSTANT`: Injected constant value
-   `VALUE`: Injected configured value
-   `INTERCEPTOR`: Interceptor applied to a method

<!-- Members -->

## METHOD

```ts
METHOD = "method",
```

## PROPERTY

```ts
PROPERTY = "property",
```

## CONSTANT

```ts
CONSTANT = "constant",
```

## VALUE

```ts
VALUE = "value",
```

## INTERCEPTOR

```ts
INTERCEPTOR = "interceptor"
```
