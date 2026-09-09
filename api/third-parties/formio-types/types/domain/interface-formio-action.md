---
url: /api/third-parties/formio-types/types/domain/interface-formio-action.md
description: api documentation of FormioAction from @tsed/formio-types
---

## Usage

```typescript
import { FormioAction } from "@tsed/formio-types";
```

> See [/packages/third-parties/formio-types/src/domain/FormioAction.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio-types/src/domain/FormioAction.ts#L0-L0).

## Overview

```ts
interface FormioAction<Settings = any> {
    name: string;
    title: string;
    action: string;
    handler: string[];
    method: string[];
    priority: number;
    form: any;
    settings: Settings;
    condition?: any;
    deleted?: number | null;
}
```

## name

```ts
name: string;
```

## title

```ts
title: string;
```

## action

```ts
action: string;
```

## handler

```ts
handler: string[];
```

## method

```ts
method: string[];
```

## priority

```ts
priority: number;
```

## form

```ts
form: any;
```

## settings

```ts
settings: Settings;
```

## condition

```ts
condition?: any;
```

## deleted

```ts
deleted?: number | null;
```
