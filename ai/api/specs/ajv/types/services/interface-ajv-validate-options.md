---
title: AjvValidateOptions from @tsed/ajv
description: api documentation of AjvValidateOptions from @tsed/ajv
meta:
 - name: keywords
   description: api typescript node.js documentation AjvValidateOptions interface
---
# AjvValidateOptions - @tsed/ajv

## Usage

```typescript
import { AjvValidateOptions } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/services/AjvService.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/services/AjvService.ts#L0-L0).

## Overview

```ts
interface AjvValidateOptions extends Record<string, any> {
    schema?: JsonSchema | Partial<JsonSchemaObject>;
    type?: Type<any> | any;
    collectionType?: Type<any> | any;
    returnsCoercedValues?: boolean;
}
```

<!-- Members -->

## schema

```ts
schema?: JsonSchema | Partial<JsonSchemaObject>;
```

## type

```ts
type?: Type<any> | any;
```

## collectionType

```ts
collectionType?: Type<any> | any;
```

## returnsCoercedValues

```ts
returnsCoercedValues?: boolean;
```
