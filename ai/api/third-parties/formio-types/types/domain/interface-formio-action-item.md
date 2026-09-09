---
title: FormioActionItem from @tsed/formio-types
description: api documentation of FormioActionItem from @tsed/formio-types
meta:
 - name: keywords
   description: api typescript node.js documentation FormioActionItem interface
---
# FormioActionItem - @tsed/formio-types

## Usage

```typescript
import { FormioActionItem } from "@tsed/formio-types";
```

> See [/packages/third-parties/formio-types/src/domain/FormioActionItem.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio-types/src/domain/FormioActionItem.ts#L0-L0).

## Overview

```ts
interface FormioActionItem<Data = any> {
    _id: string | undefined;
    title: string;
    form: string;
    submission?: string;
    action: string;
    handler: string;
    method: string;
    state: "new" | "inprogress" | "complete" | "error";
    messages: any[];
    data: Data;
}
```

<!-- Members -->

## \_id

```ts
_id: string | undefined;
```

## title

```ts
title: string;
```

## form

```ts
form: string;
```

## submission

```ts
submission?: string;
```

## action

```ts
action: string;
```

## handler

```ts
handler: string;
```

## method

```ts
method: string;
```

## state

```ts
state: "new" | "inprogress" | "complete" | "error";
```

## messages

```ts
messages: any[];
```

## data

```ts
data: Data;
```
