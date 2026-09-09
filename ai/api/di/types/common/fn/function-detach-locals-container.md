---
title: detachLocalsContainer from @tsed/di
description: api documentation of detachLocalsContainer from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation detachLocalsContainer function
---
# detachLocalsContainer - @tsed/di

## Usage

```typescript
import { detachLocalsContainer } from "@tsed/di";
```

> See [/packages/di/src/common/fn/localsContainer.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/fn/localsContainer.ts#L0-L0).

## Overview

```ts
function detachLocalsContainer(): void;
```

<!-- Description -->

## Description

Detach and stage the current locals container.

Removes the global locals reference and saves it for cleanup.
Used internally to manage request scope lifecycle.
