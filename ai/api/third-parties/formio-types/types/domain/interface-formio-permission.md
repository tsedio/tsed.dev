---
title: FormioPermission from @tsed/formio-types
description: api documentation of FormioPermission from @tsed/formio-types
meta:
 - name: keywords
   description: api typescript node.js documentation FormioPermission interface
---
# FormioPermission - @tsed/formio-types

## Usage

```typescript
import { FormioPermission } from "@tsed/formio-types";
```

> See [/packages/third-parties/formio-types/src/domain/FormioPermission.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio-types/src/domain/FormioPermission.ts#L0-L0).

## Overview

```ts
interface FormioPermission {
    type: "create_all" | "read_all" | "update_all" | "delete_all" | "create_own" | "read_own" | "update_own" | "delete_own" | "self";
    roles: string[];
}
```

<!-- Members -->

## type

```ts
type: "create_all" | "read_all" | "update_all" | "delete_all" | "create_own" | "read_own" | "update_own" | "delete_own" | "self";
```

## roles

```ts
roles: string[];
```
