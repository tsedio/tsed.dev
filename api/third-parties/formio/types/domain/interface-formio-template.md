---
url: /api/third-parties/formio/types/domain/interface-formio-template.md
description: api documentation of FormioTemplate from @tsed/formio
---

## Usage

```typescript
import { FormioTemplate } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioTemplate.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioTemplate.ts#L0-L0).

## Overview

```ts
interface FormioTemplate {
    roles?: Record<string, FormioRole>;
    forms: Record<string, FormioForm>;
    resources: Record<string, FormioForm>;
    actions: Record<string, FormioActionItem>;
    submissions?: Record<string, FormioSubmission[]>;
}
```

## roles

```ts
roles?: Record<string, FormioRole>;
```

## forms

```ts
forms: Record<string, FormioForm>;
```

## resources

```ts
resources: Record<string, FormioForm>;
```

## actions

```ts
actions: Record<string, FormioActionItem>;
```

## submissions

```ts
submissions?: Record<string, FormioSubmission[]>;
```
