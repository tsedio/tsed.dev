---
title: Conditional from @tsed/schema-formio
description: api documentation of Conditional from @tsed/schema-formio
meta:
 - name: keywords
   description: api typescript node.js documentation Conditional decorator
---
# Conditional - @tsed/schema-formio

## Usage

```typescript
import { Conditional } from "@tsed/schema-formio";
```

> See [/packages/third-parties/schema-formio/src/decorators/conditional.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/schema-formio/src/decorators/conditional.ts#L0-L0).

## Overview

```ts
function Conditional(conditional: {
    show: boolean;
    when: string;
    eq: any;
}): PropertyDecorator;
```

<!-- Description -->

## Description

Adds a conditional display rule on the input form.

<!-- Members -->

## show

```ts
show: boolean;
```

## when

```ts
when: string;
```

## eq

```ts
eq: any;
```
