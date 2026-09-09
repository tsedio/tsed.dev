---
title: HookRef from @tsed/hooks
description: api documentation of HookRef from @tsed/hooks
meta:
 - name: keywords
   description: api typescript node.js documentation HookRef type
---
# HookRef - @tsed/hooks

## Usage

```typescript
import { HookRef } from "@tsed/hooks/src/Hooks";
```

> See [/packages/hooks/src/Hooks.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/hooks/src/Hooks.ts#L0-L0).

## Overview

```ts
type HookRef = string | symbol | any | Function;
```

<!-- Description -->

## Description

A reference that can be used to identify and manage hook listeners.

This type allows various kinds of values to be used as references when registering
hook listeners, enabling flexible listener management and targeted event emission.
