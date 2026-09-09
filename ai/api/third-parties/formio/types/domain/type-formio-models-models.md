---
title: FormioModelsModels from @tsed/formio
description: api documentation of FormioModelsModels from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation FormioModelsModels type
---
# FormioModelsModels - @tsed/formio

## Usage

```typescript
import { FormioModelsModels } from "@tsed/third-parties/formio/src/domain/FormioModels";
```

> See [/packages/third-parties/formio/src/domain/FormioModels.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioModels.ts#L0-L0).

## Overview

```ts
type FormioModelsModels = {
    action: FormioActionModelCtor;
    actionItem: FormioBaseModel<FormioActionItem>;
    form: FormioModel<FormioForm>;
    role: FormioModel<FormioRole>;
    schema: FormioBaseModel<FormioSchema>;
    submission: FormioBaseModel<FormioSubmission>;
    token: FormioBaseModel<FormioToken>;
} & Record<string, FormioBaseModel>;
```

<!-- Members -->

## action

```ts
action: FormioActionModelCtor;
```

## actionItem

```ts
actionItem: FormioBaseModel<FormioActionItem>;
```

## form

```ts
form: FormioModel<FormioForm>;
```

## role

```ts
role: FormioModel<FormioRole>;
```

## schema

```ts
schema: FormioBaseModel<FormioSchema>;
```

## submission

```ts
submission: FormioBaseModel<FormioSubmission>;
```

## token

```ts
token: FormioBaseModel<FormioToken>;
```
