---
title: hooks from @tsed/hooks
description: api documentation of hooks from @tsed/hooks
meta:
 - name: keywords
   description: api typescript node.js documentation hooks const
---
# hooks - @tsed/hooks

## Usage

```typescript
import { hooks } from "@tsed/hooks";
```

> See [/packages/hooks/src/Hooks.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/hooks/src/Hooks.ts#L0-L0).

## Overview

```ts
const hooks: Hooks;
```

<!-- Description -->

## Description

Global singleton instance of the Hooks class.

This instance provides a centralized event management system that can be used
throughout an application without needing to create and pass around separate
Hooks instances.

### Usage

```typescript
import {hooks} from "@tsed/hooks";

hooks.on("app:started", () => {
  console.log("Application started");
});

hooks.emit("app:started", []);
```
