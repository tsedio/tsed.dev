---
title: ActionCtx from @tsed/formio
description: api documentation of ActionCtx from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation ActionCtx decorator
---
# ActionCtx - @tsed/formio

## Usage

```typescript
import { ActionCtx } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/decorators/actionCtx.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/decorators/actionCtx.ts#L0-L0).

## Overview

```ts
function ActionCtx(expression?: string): ParameterDecorator;
export type ActionCtx = {
    handler: string;
    method: string;
    setActionItemMessage: SetActionItemMessage;
    action: FormioAction;
};
```

<!-- Description -->

## Description

Return the current action context with the following data:

```typescript
export type ActionCtx = {
 handler: string;
 method: string;
 setActionItemMessage: SetActionItemMessage;
 action: FormioAction;
};
```

<!-- Members -->

## handler

```ts
handler: string;
```

## method

```ts
method: string;
```

## setActionItemMessage

```ts
setActionItemMessage: SetActionItemMessage;
```

## action

```ts
action: FormioAction;
```
