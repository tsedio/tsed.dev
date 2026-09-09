---
title: CustomConditional from @tsed/schema-formio
description: api documentation of CustomConditional from @tsed/schema-formio
meta:
 - name: keywords
   description: api typescript node.js documentation CustomConditional decorator
---
# CustomConditional - @tsed/schema-formio

## Usage

```typescript
import { CustomConditional } from "@tsed/schema-formio";
```

> See [/packages/third-parties/schema-formio/src/decorators/customConditional.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/schema-formio/src/decorators/customConditional.ts#L0-L0).

## Overview

```ts
function CustomConditional(customConditional: string | ((ctx: CustomConditionalCtx) => any)): PropertyDecorator;
```

<!-- Description -->

## Description

Adds custom conditional rule to display or not the input form.
