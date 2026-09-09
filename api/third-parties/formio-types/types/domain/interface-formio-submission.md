---
url: /api/third-parties/formio-types/types/domain/interface-formio-submission.md
description: api documentation of FormioSubmission from @tsed/formio-types
---

## Usage

```typescript
import { FormioSubmission } from "@tsed/formio-types";
```

> See [/packages/third-parties/formio-types/src/domain/FormioSubmission.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio-types/src/domain/FormioSubmission.ts#L0-L0).

## Overview

```ts
interface FormioSubmission<Data = any> extends Record<string, any> {
    _id: string | undefined;
    form: string;
    data: Data;
    owner?: string;
    roles?: string[];
    access?: FormioAccess[];
    externalIds?: {
        type?: string;
        resource?: string;
        id?: string;
    }[];
    metadata?: Record<string, any>;
    created?: string;
    updated?: string;
    deleted?: string | null;
    modified?: string;
}
```

## \_id

```ts
_id: string | undefined;
```

## form

```ts
form: string;
```

## data

```ts
data: Data;
```

## owner

```ts
owner?: string;
```

## roles

```ts
roles?: string[];
```

## access

```ts
access?: FormioAccess[];
```

## externalIds

```ts
externalIds?: {
     type?: string;
     resource?: string;
     id?: string;
 }[];
```

## metadata

```ts
metadata?: Record<string, any>;
```

## created

```ts
created?: string;
```

## updated

```ts
updated?: string;
```

## deleted

```ts
deleted?: string | null;
```

## modified

```ts
modified?: string;
```
