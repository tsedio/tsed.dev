---
title: FormioComponent from @tsed/formio-types
description: api documentation of FormioComponent from @tsed/formio-types
meta:
 - name: keywords
   description: api typescript node.js documentation FormioComponent interface
---
# FormioComponent - @tsed/formio-types

## Usage

```typescript
import { FormioComponent } from "@tsed/formio-types";
```

> See [/packages/third-parties/formio-types/src/domain/FormioComponent.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio-types/src/domain/FormioComponent.ts#L0-L0).

## Overview

```ts
interface FormioComponent extends BaseComponent {
    type: string;
    key: string;
    template?: string;
    dataSrc?: "json" | "url";
    data?: {
        json?: any;
        url?: string;
        [key: string]: any;
    };
    valueProperty?: string;
    customConditional?: string;
    components?: FormioComponent[];
    form?: string | FormioForm;
}
```

<!-- Members -->

## type

```ts
type: string;
```

## key

```ts
key: string;
```

## template

```ts
template?: string;
```

## dataSrc

```ts
dataSrc?: "json" | "url";
```

## data

```ts
data?: {
     json?: any;
     url?: string;
     [key: string]: any;
 };
```

## valueProperty

```ts
valueProperty?: string;
```

## customConditional

```ts
customConditional?: string;
```

## components

```ts
components?: FormioComponent[];
```

## form

```ts
form?: string | FormioForm;
```
