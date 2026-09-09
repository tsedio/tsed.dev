---
url: /api/third-parties/formio-types/types/domain/interface-formio-form.md
description: api documentation of FormioForm from @tsed/formio-types
---

## Usage

```typescript
import { FormioForm } from "@tsed/formio-types";
```

> See [/packages/third-parties/formio-types/src/domain/FormioForm.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio-types/src/domain/FormioForm.ts#L0-L0).

## Overview

```ts
interface FormioForm extends Record<string, any> {
    _id: string | undefined;
    title: string;
    name: string;
    path: string;
    type: string;
    display?: "form" | "wizard" | string;
    action?: string;
    tags?: string[];
    deleted: number | null;
    access: FormioPermission[];
    submissionAccess: FormioPermission[];
    owner: string;
    components: FormioComponent[];
    settings?: any;
    properties?: any;
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

The title for the form

## name

```ts
name: string;
```

The machine name for this form

## path

```ts
path: string;
```

The path for this resource

## type

```ts
type: string;
```

The form type.

## display

```ts
display?: "form" | "wizard" | string;
```

The display method for this form

## action

```ts
action?: string;
```

A custom action URL to submit the data to.

## tags

```ts
tags?: string[];
```

## deleted

```ts
deleted: number | null;
```

## access

```ts
access: FormioPermission[];
```

Access rules

## submissionAccess

```ts
submissionAccess: FormioPermission[];
```

Submission access rules

## owner

```ts
owner: string;
```

## components

```ts
components: FormioComponent[];
```

Components.

## settings

```ts
settings?: any;
```

Custom form settings object.

## properties

```ts
properties?: any;
```

Custom form properties.
