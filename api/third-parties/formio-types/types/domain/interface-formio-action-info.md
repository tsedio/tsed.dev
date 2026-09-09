---
url: /api/third-parties/formio-types/types/domain/interface-formio-action-info.md
description: api documentation of FormioActionInfo from @tsed/formio-types
---

## Usage

```typescript
import { FormioActionInfo } from "@tsed/formio-types";
```

> See [/packages/third-parties/formio-types/src/domain/FormioActionInfo.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio-types/src/domain/FormioActionInfo.ts#L0-L0).

## Overview

```ts
interface FormioActionInfo {
    name: string;
    title: string;
    description: string;
    priority: number;
    defaults: {
        handler: string[];
        method: string[];
    };
    access?: {
        handler: boolean;
        method: boolean;
    };
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

## description

```ts
description: string;
```

## priority

```ts
priority: number;
```

## defaults

```ts
defaults: {
     handler: string[];
     method: string[];
 };
```

## access

```ts
access?: {
     handler: boolean;
     method: boolean;
 };
```
