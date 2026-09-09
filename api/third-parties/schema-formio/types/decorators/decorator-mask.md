---
url: /api/third-parties/schema-formio/types/decorators/decorator-mask.md
description: api documentation of Mask from @tsed/schema-formio
---

## Usage

```typescript
import { Mask } from "@tsed/schema-formio";
```

> See [/packages/third-parties/schema-formio/src/decorators/mask.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/schema-formio/src/decorators/mask.ts#L0-L0).

## Overview

```ts
function Mask(inputMask: string, inputMaskPlaceholderChar?: string): PropertyDecorator;
```

## Description

An input mask helps the user with input by ensuring a predefined format.

* 9: numeric
* a: alphabetical
* \*: alphanumeric

Example telephone mask: (999) 999-9999

See the [jquery.inputmask](https://github.com/RobinHerbots/Inputmask) documentation for more information.
