---
title: FormioActions from @tsed/formio
description: api documentation of FormioActions from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation FormioActions interface
---
# FormioActions - @tsed/formio

## Usage

```typescript
import { FormioActions } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioActionsIndex.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioActionsIndex.ts#L0-L0).

## Overview

```ts
interface FormioActions {
    email: FormioActionModelCtor;
    login: FormioActionModelCtor;
    resetpass: FormioActionModelCtor;
    role: FormioActionModelCtor;
    save: FormioActionModelCtor;
    sql: FormioActionModelCtor;
    webhook: FormioActionModelCtor;
    [key: string]: FormioActionModelCtor;
}
```

<!-- Members -->

## email

```ts
email: FormioActionModelCtor;
```

## login

```ts
login: FormioActionModelCtor;
```

## resetpass

```ts
resetpass: FormioActionModelCtor;
```

## role

```ts
role: FormioActionModelCtor;
```

## save

```ts
save: FormioActionModelCtor;
```

## sql

```ts
sql: FormioActionModelCtor;
```

## webhook

```ts
webhook: FormioActionModelCtor;
```

## \[key: string]

```ts
[key: string]: FormioActionModelCtor;
```
