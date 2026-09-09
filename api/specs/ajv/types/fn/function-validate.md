---
url: /api/specs/ajv/types/fn/function-validate.md
description: api documentation of validate from @tsed/ajv
---

## Usage

```typescript
import { validate } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/fn/validate.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/fn/validate.ts#L0-L0).

## Overview

```ts
function validate<TReturn = never, TValue = unknown>(value: TValue, options: AjvValidateOptions | JsonSchema): Promise<[TReturn] extends [never] ? TValue : TReturn>;
```

* **value** (`TValue`): Value to validate.

* **options** (`AjvValidateOptions` | `JsonSchema`): Validation options, a `JsonSchema`, or a target type descriptor.

## Description

Validate a value against a JSON schema or a type using the configured `AjvService`.

The return type is inferred from `value` by default and can be overridden with an explicit generic:
`validate<MyType>(value, options)`.
