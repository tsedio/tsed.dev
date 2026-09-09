---
title: FormioInstaller from @tsed/formio
description: api documentation of FormioInstaller from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation FormioInstaller class
---
# FormioInstaller - @tsed/formio

## Usage

```typescript
import { FormioInstaller } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/services/FormioInstaller.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/services/FormioInstaller.ts#L0-L0).

## Overview

```ts
class FormioInstaller extends FormioDatabase {
    protected logger: Logger;
    install(template: FormioTemplate, root: any): Promise<void>;
    createRootUser<User = unknown>(user: {
        email: string;
        password: string;
    }, template: FormioTemplate): Promise<FormioSubmission<User>>;
}
```

<!-- Members -->

## protected logger

```ts
protected logger: Logger;
```

## install

```ts
install(template: FormioTemplate, root: any): Promise<void>;
```

## createRootUser

```ts
createRootUser<User = unknown>(user: {
     email: string;
     password: string;
 }, template: FormioTemplate): Promise<FormioSubmission<User>>;
```
