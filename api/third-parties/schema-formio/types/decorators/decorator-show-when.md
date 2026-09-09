---
url: /api/third-parties/schema-formio/types/decorators/decorator-show-when.md
description: api documentation of ShowWhen from @tsed/schema-formio
---

## Usage

```typescript
import { ShowWhen } from "@tsed/schema-formio";
```

> See [/packages/third-parties/schema-formio/src/decorators/conditional.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/schema-formio/src/decorators/conditional.ts#L0-L0).

## Overview

```ts
function ShowWhen(property: string, eq: any): PropertyDecorator;
```

## Description

Adds a conditional display rule on the input form.
