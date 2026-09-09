---
url: /api/hooks/types/type-hook-listener.md
description: api documentation of HookListener from @tsed/hooks
---

## Usage

```typescript
import { HookListener } from "@tsed/hooks/src/Hooks";
```

> See [/packages/hooks/src/Hooks.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/hooks/src/Hooks.ts#L0-L0).

## Overview

```ts
type HookListener = Function;
```

## Description

A function that handles hook events.

Hook listeners are invoked when their associated event is emitted or altered,
receiving the event arguments as parameters.
