---
url: /api/core/types/utils/function-is-symbol-or-symbol-class.md
description: api documentation of isSymbolOrSymbolClass from @tsed/core
---

## Usage

```typescript
import { isSymbolOrSymbolClass } from "@tsed/core";
```

> See [/packages/core/src/utils/isSymbol.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isSymbol.ts#L0-L0).

## Overview

```ts
function isSymbolOrSymbolClass(target: any): target is symbol;
```

## Description

Checks if a value is a symbol primitive, Symbol object, or the Symbol constructor.
