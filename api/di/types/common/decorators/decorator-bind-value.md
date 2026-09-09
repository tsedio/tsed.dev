---
url: /api/di/types/common/decorators/decorator-bind-value.md
description: api documentation of bindValue from @tsed/di
---

## Usage

```typescript
import { bindValue } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/value.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/value.ts#L0-L0).

## Overview

```ts
function bindValue(target: any, propertyKey: string | symbol, expression: string, defaultValue?: any): void;
```
