---
url: >-
  /api/third-parties/schema-formio/types/decorators/decorator-custom-conditional.md
description: api documentation of CustomConditional from @tsed/schema-formio
---

## Usage

```typescript
import { CustomConditional } from "@tsed/schema-formio";
```

> See [/packages/third-parties/schema-formio/src/decorators/customConditional.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/schema-formio/src/decorators/customConditional.ts#L0-L0).

## Overview

```ts
function CustomConditional(customConditional: string | ((ctx: CustomConditionalCtx) => any)): PropertyDecorator;
```

## Description

Adds custom conditional rule to display or not the input form.
