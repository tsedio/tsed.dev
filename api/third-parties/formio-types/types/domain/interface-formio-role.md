---
url: /api/third-parties/formio-types/types/domain/interface-formio-role.md
description: api documentation of FormioRole from @tsed/formio-types
---

## Usage

```typescript
import { FormioRole } from "@tsed/formio-types";
```

> See [/packages/third-parties/formio-types/src/domain/FormioRole.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio-types/src/domain/FormioRole.ts#L0-L0).

## Overview

```ts
interface FormioRole extends Record<string, any> {
    _id: string | undefined;
    title: string;
    description: string;
    deleted: number | null;
    default: boolean;
    admin: boolean;
}
```

## \_id

```ts
_id: string | undefined;
```

## title

```ts
title: string;
```

## description

```ts
description: string;
```

## deleted

```ts
deleted: number | null;
```

## default

```ts
default: boolean;
```

## admin

```ts
admin: boolean;
```
