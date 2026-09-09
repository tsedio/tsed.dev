---
url: /api/core/types/utils/function-name-of-symbol.md
description: api documentation of nameOfSymbol from @tsed/core
---

## Usage

```typescript
import { nameOfSymbol } from "@tsed/core";
```

> See [/packages/core/src/utils/nameOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/nameOf.ts#L0-L0).

## Overview

```ts
const nameOfSymbol: (sym: symbol) => string;
```

## Description

Extracts the name from a symbol by removing the Symbol() wrapper.
