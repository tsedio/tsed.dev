---
url: /api/third-parties/schema-formio/types/decorators/decorator-conditional.md
description: api documentation of Conditional from @tsed/schema-formio
---

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

## Description

Adds a conditional display rule on the input form.

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
