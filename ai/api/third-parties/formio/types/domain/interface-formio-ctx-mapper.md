---
title: FormioCtxMapper from @tsed/formio
description: api documentation of FormioCtxMapper from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation FormioCtxMapper interface
---
# FormioCtxMapper - @tsed/formio

## Usage

```typescript
import { FormioCtxMapper } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioCtxMapper.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioCtxMapper.ts#L0-L0).

## Overview

```ts
interface FormioCtxMapper {
    forms: Map<string, MongooseDocument<FormioForm>>;
    actions: Map<string, MongooseDocument<FormioAction>>;
    roles: Map<string, MongooseDocument<FormioRole>>;
}
```

<!-- Members -->

## forms

```ts
forms: Map<string, MongooseDocument<FormioForm>>;
```

## actions

```ts
actions: Map<string, MongooseDocument<FormioAction>>;
```

## roles

```ts
roles: Map<string, MongooseDocument<FormioRole>>;
```
