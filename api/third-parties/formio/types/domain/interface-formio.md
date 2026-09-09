---
url: /api/third-parties/formio/types/domain/interface-formio.md
description: api documentation of Formio from @tsed/formio
---

## Usage

```typescript
import { Formio } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/Formio.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/Formio.ts#L0-L0).

## Overview

```ts
interface Formio extends FormioBase {
    Action: FormioActionModelCtor;
    BaseModel: FormioBaseModel;
    actions: FormioActionsIndex;
    resources: any;
    db: Db;
    schemas: FormioSchemas & {
        AccessSchema: Schema;
        PermissionSchema: Schema;
        FieldMatchAccessPermissionSchema: Schema;
    };
    models: FormioModels;
    mongoose: Mongoose;
    readonly middleware: FormioMiddlewares;
    hooks: FormioHooks;
    plugins: any;
    readonly hook: FormioHook;
    readonly util: FormioUtil;
    readonly update: FormioUpdate;
    readonly template: FormioTemplateUtil;
    encrypt(text: string, next: (err: null | Error, hash: string) => void): void;
}
```

## Action

```ts
Action: FormioActionModelCtor;
```

## BaseModel

```ts
BaseModel: FormioBaseModel;
```

## actions

```ts
actions: FormioActionsIndex;
```

## resources

```ts
resources: any;
```

## db

```ts
db: Db;
```

Database connection

## schemas

```ts
schemas: FormioSchemas & {
     AccessSchema: Schema;
     PermissionSchema: Schema;
     FieldMatchAccessPermissionSchema: Schema;
 };
```

## models

```ts
models: FormioModels;
```

## mongoose

```ts
mongoose: Mongoose;
```

Mongoose lib.

## readonly middleware

```ts
readonly middleware: FormioMiddlewares;
```

Exported formio middlewares

## hooks

```ts
hooks: FormioHooks;
```

Hooks.

## plugins

```ts
plugins: any;
```

Plugins.

## readonly hook

```ts
readonly hook: FormioHook;
```

Formio hook util.

## readonly util

```ts
readonly util: FormioUtil;
```

The formio utils.

## readonly update

```ts
readonly update: FormioUpdate;
```

Update system.

## readonly template

```ts
readonly template: FormioTemplateUtil;
```

Template export/import

## encrypt

```ts
encrypt(text: string, next: (err: null | Error, hash: string) => void): void;
```

Encryption system.
