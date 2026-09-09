---
title: AjvService from @tsed/ajv
description: api documentation of AjvService from @tsed/ajv
meta:
 - name: keywords
   description: api typescript node.js documentation AjvService class
---
# AjvService - @tsed/ajv

## Usage

```typescript
import { AjvService } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/services/AjvService.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/services/AjvService.ts#L0-L0).

## Overview

```ts
class AjvService {
    readonly name = "ajv";
    protected errorFormatter: ErrorFormatter;
    protected returnsCoercedValues: boolean | undefined;
    protected hasLoadSchema: boolean;
    protected ajv: Ajv;
    protected validatorsBySchema: WeakMap<object, ValidateFunction<unknown>>;
    validate<TReturn = never, TValue = unknown>(value: TValue, options: AjvValidateOptions): Promise<[TReturn] extends [never] ? TValue : TReturn>;
    protected getValidator(input: Type | JsonSchema | JsonSchemaObject, additionalOptions: Record<string, any>): Promise<ValidateFunction<unknown>>;
}
```

<!-- Members -->

## readonly name

```ts
readonly name = "ajv";
```

## protected errorFormatter

```ts
protected errorFormatter: ErrorFormatter;
```

## protected returnsCoercedValues

```ts
protected returnsCoercedValues: boolean | undefined;
```

## protected hasLoadSchema

```ts
protected hasLoadSchema: boolean;
```

## protected ajv

```ts
protected ajv: Ajv;
```

## protected validatorsBySchema

```ts
protected validatorsBySchema: WeakMap<object, ValidateFunction<unknown>>;
```

## validate

```ts
validate<TReturn = never, TValue = unknown>(value: TValue, options: AjvValidateOptions): Promise<[TReturn] extends [never] ? TValue : TReturn>;
```

-   **value** (`TValue`): Value to validate.

-   **options** (`AjvValidateOptions`): Validation options or `JsonSchema`.

Validate a value against a JSON schema, a model type, or explicit AJV options.

The return type is inferred from `value` by default and can be overridden with an explicit generic:
`ajvService.validate<MyType>(value, options)`.

If `returnsCoercedValues` is enabled globally or in `options`, coercions performed by AJV are returned.

## protected getValidator

```ts
protected getValidator(input: Type | JsonSchema | JsonSchemaObject, additionalOptions: Record<string, any>): Promise<ValidateFunction<unknown>>;
```

-   **schema** (\`\`): Schema source as `JsonSchema` instance or plain JSON schema object.

Resolve and compile a validator for the provided schema input.

The compiled validator is cached by schema object identity to avoid
recompiling validators for repeated calls using the same schema instance.

When `loadSchema` is configured, this method uses `compileAsync` to support
asynchronous external reference resolution.
