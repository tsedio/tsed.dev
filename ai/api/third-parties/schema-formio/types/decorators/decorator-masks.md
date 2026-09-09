---
title: Masks from @tsed/schema-formio
description: api documentation of Masks from @tsed/schema-formio
meta:
 - name: keywords
   description: api typescript node.js documentation Masks decorator
---
# Masks - @tsed/schema-formio

## Usage

```typescript
import { Masks } from "@tsed/schema-formio";
```

> See [/packages/third-parties/schema-formio/src/decorators/mask.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/schema-formio/src/decorators/mask.ts#L0-L0).

## Overview

```ts
function Masks(...inputMasks: {
    label: string;
    mask: string;
}[]): PropertyDecorator;
```

<!-- Description -->

## Description

An input mask helps the user with input by ensuring a predefined format.

-   9: numeric
-   a: alphabetical
-   \*: alphanumeric

Example telephone mask: (999) 999-9999

See the [jquery.inputmask](https://github.com/RobinHerbots/Inputmask) documentation for more information.

<!-- Members -->

## label

```ts
label: string;
```

## mask

```ts
mask: string;
```
