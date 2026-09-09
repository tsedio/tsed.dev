---
url: /api/di/types/browser/decorators/decorator-inject-context.md
description: api documentation of InjectContext from @tsed/di
---

## Usage

```typescript
import { InjectContext } from "@tsed/di";
```

> See [/packages/di/src/browser/decorators/injectContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/browser/decorators/injectContext.ts#L0-L0).

## Overview

```ts
function InjectContext(transform?: ($ctx: DIContext) => unknown): PropertyDecorator;
```

## Description

Inject a context like PlatformContext or any BaseContext.

```typescript
@Injectable()
export class MyService {
  @InjectContext()
  ctx?: Context;
}
```
