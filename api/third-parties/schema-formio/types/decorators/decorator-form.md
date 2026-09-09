---
url: /api/third-parties/schema-formio/types/decorators/decorator-form.md
description: api documentation of Form from @tsed/schema-formio
---

## Usage

```typescript
import { Form } from "@tsed/schema-formio";
```

> See [/packages/third-parties/schema-formio/src/decorators/form.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/schema-formio/src/decorators/form.ts#L0-L0).

## Overview

```ts
function Form(form?: Partial<Omit<FormioForm, "components" | "_id">>): ClassDecorator;
```

## Description

Expose the model as Formio Form.
