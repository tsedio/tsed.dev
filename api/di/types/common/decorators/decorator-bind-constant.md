---
url: /api/di/types/common/decorators/decorator-bind-constant.md
description: api documentation of bindConstant from @tsed/di
---

## Usage

```typescript
import { bindConstant } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/constant.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/constant.ts#L0-L0).

## Overview

```ts
function bindConstant(target: Object, propertyKey: string | symbol, expression: string, defaultValue?: any): void;
```
