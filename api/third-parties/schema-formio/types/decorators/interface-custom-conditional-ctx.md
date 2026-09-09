---
url: >-
  /api/third-parties/schema-formio/types/decorators/interface-custom-conditional-ctx.md
description: api documentation of CustomConditionalCtx from @tsed/schema-formio
---

## Usage

```typescript
import { CustomConditionalCtx } from "@tsed/schema-formio";
```

> See [/packages/third-parties/schema-formio/src/decorators/customConditional.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/schema-formio/src/decorators/customConditional.ts#L0-L0).

## Overview

```ts
interface CustomConditionalCtx<Value = any, Data = any, Row = any> {
    form: FormioForm;
    submission: FormioSubmission<Data>;
    data: Data;
    row: Row;
    component: FormioComponent;
    instance: any;
    value: Value;
    moment: Moment;
    _: LoDashStatic;
    utils: typeof import("@formio/js/utils").Utils;
    util: typeof import("@formio/js/utils").Utils;
}
```

## form

```ts
form: FormioForm;
```

The complete submission object.

## submission

```ts
submission: FormioSubmission<Data>;
```

The complete submission object.

## data

```ts
data: Data;
```

The complete submission data object.

## row

```ts
row: Row;
```

Contextual "row" data, used within DataGrid, EditGrid, and Container components

## component

```ts
component: FormioComponent;
```

The current component JSON

## instance

```ts
instance: any;
```

The current component instance.

## value

```ts
value: Value;
```

The current value of the component.

## moment

```ts
moment: Moment;
```

The moment.js library for date manipulation.

## \_

```ts
_: LoDashStatic;
```

An instance of Lodash.

## utils: typeof import

```ts
utils: typeof import("@formio/js/utils").Utils;
```

An instance of the FormioUtils object.

## util: typeof import

```ts
util: typeof import("@formio/js/utils").Utils;
```

An alias for "utils".
