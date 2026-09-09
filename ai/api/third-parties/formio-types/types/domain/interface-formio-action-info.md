---
title: FormioActionInfo from @tsed/formio-types
description: api documentation of FormioActionInfo from @tsed/formio-types
meta:
 - name: keywords
   description: api typescript node.js documentation FormioActionInfo interface
---
# FormioActionInfo - @tsed/formio-types

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

<!-- Members -->

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
