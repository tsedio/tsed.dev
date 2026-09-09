---
title: nameOfSymbol from @tsed/core
description: api documentation of nameOfSymbol from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation nameOfSymbol function
---
# nameOfSymbol - @tsed/core

## Usage

```typescript
import { nameOfSymbol } from "@tsed/core";
```

> See [/packages/core/src/utils/nameOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/nameOf.ts#L0-L0).

## Overview

```ts
const nameOfSymbol: (sym: symbol) => string;
```

<!-- Description -->

## Description

Extracts the name from a symbol by removing the Symbol() wrapper.
