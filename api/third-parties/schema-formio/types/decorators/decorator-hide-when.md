---
url: /api/third-parties/schema-formio/types/decorators/decorator-hide-when.md
description: api documentation of HideWhen from @tsed/schema-formio
---

## Usage

```typescript
import { HideWhen } from "@tsed/schema-formio";
```

> See [/packages/third-parties/schema-formio/src/decorators/conditional.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/schema-formio/src/decorators/conditional.ts#L0-L0).

## Overview

```ts
function HideWhen(property: string, eq: any): PropertyDecorator;
```

## Description

Adds a conditional display rule on the input form.
