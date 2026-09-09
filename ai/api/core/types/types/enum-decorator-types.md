---
title: DecoratorTypes from @tsed/core
description: api documentation of DecoratorTypes from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation DecoratorTypes enum
---
# DecoratorTypes - @tsed/core

## Usage

```typescript
import { DecoratorTypes } from "@tsed/core";
```

> See [/packages/core/src/types/DecoratorTypes.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/types/DecoratorTypes.ts#L0-L0).

## Overview

```ts
enum DecoratorTypes {
    PARAM = "parameter",
    PARAM_CTOR = "parameter.constructor",
    PARAM_STC = "parameter.static",
    PROP = "property",
    PROP_STC = "property.static",
    METHOD = "method",
    METHOD_STC = "method.static",
    CLASS = "class"
}
```

<!-- Description -->

## Description

Normalized decorator kinds recognized by Ts.ED.

This enum helps identify, at runtime, the element a decorator applies to
(parameter, property, method, class, and static/constructor variants).

<!-- Members -->

##

```ts
```

## PARAM

```ts
PARAM = "parameter",
```

##

```ts
```

## PARAM_STC

```ts
PARAM_STC = "parameter.static",
```

##

```ts
```

## PROP

```ts
PROP = "property",
```

##

```ts
```

## PROP_STC

```ts
PROP_STC = "property.static",
```

##

```ts
```

## METHOD

```ts
METHOD = "method",
```

##

```ts
```

## METHOD_STC

```ts
METHOD_STC = "method.static",
```

##

```ts
```

## CLASS

```ts
CLASS = "class"
```
