---
title: FormioSchemas from @tsed/formio
description: api documentation of FormioSchemas from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation FormioSchemas interface
---
# FormioSchemas - @tsed/formio

## Usage

```typescript
import { FormioSchemas } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioModels.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioModels.ts#L0-L0).

## Overview

```ts
interface FormioSchemas {
    action: FormioActionMongooseSchema;
    actionItem: Schema<MongooseDocument<FormioActionItem>>;
    form: FormioMongooseSchema<FormioForm>;
    role: FormioMongooseSchema<FormioRole>;
    schema: Schema<MongooseDocument<FormioSchema>>;
    submission: Schema<MongooseDocument<FormioSubmission>>;
    token: Schema<MongooseDocument<FormioToken>>;
    [key: string]: Schema<MongooseDocument<any>>;
}
```

<!-- Members -->

## action

```ts
action: FormioActionMongooseSchema;
```

## actionItem

```ts
actionItem: Schema<MongooseDocument<FormioActionItem>>;
```

## form

```ts
form: FormioMongooseSchema<FormioForm>;
```

## role

```ts
role: FormioMongooseSchema<FormioRole>;
```

## schema

```ts
schema: Schema<MongooseDocument<FormioSchema>>;
```

## submission

```ts
submission: Schema<MongooseDocument<FormioSubmission>>;
```

## token

```ts
token: Schema<MongooseDocument<FormioToken>>;
```

## \[key: string]

```ts
[key: string]: Schema<MongooseDocument<any>>;
```
