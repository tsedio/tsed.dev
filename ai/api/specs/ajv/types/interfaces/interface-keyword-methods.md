---
title: KeywordMethods from @tsed/ajv
description: api documentation of KeywordMethods from @tsed/ajv
meta:
 - name: keywords
   description: api typescript node.js documentation KeywordMethods interface
---
# KeywordMethods - @tsed/ajv

## Usage

```typescript
import { KeywordMethods } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/interfaces/KeywordMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/interfaces/KeywordMethods.ts#L0-L0).

## Overview

```ts
interface KeywordMethods {
    code?: (cxt: KeywordCxt, ruleType?: string) => void;
    compile?: (schema: any, parentSchema: AnySchemaObject, it: SchemaObjCxt) => AjvDataValidateFunction;
    validate?: AjvSchemaValidateFunction | AjvDataValidateFunction;
}
```

<!-- Members -->

## code:

```ts
code?: (cxt: KeywordCxt, ruleType?: string) => void;
```

## compile:

```ts
compile?: (schema: any, parentSchema: AnySchemaObject, it: SchemaObjCxt) => AjvDataValidateFunction;
```

## validate

```ts
validate?: AjvSchemaValidateFunction | AjvDataValidateFunction;
```
