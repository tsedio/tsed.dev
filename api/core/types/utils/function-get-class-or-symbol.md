---
url: /api/core/types/utils/function-get-class-or-symbol.md
description: api documentation of getClassOrSymbol from @tsed/core
---

## Usage

```typescript
import { getClassOrSymbol } from "@tsed/core";
```

> See [/packages/core/src/utils/getClassOrSymbol.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/getClassOrSymbol.ts#L0-L0).

## Overview

```ts
function getClassOrSymbol(target: any): any;
```

* **target** (`any`): Valeur potentiellement typée classe, instance, ou symbole.

## Description

Retourne le constructeur de classe lorsque `target` est une classe/instance,
sinon retourne la valeur telle quelle (utile pour les `symbol`).
