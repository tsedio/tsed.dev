---
url: /api/platform/platform-middlewares/types/decorators/decorator-use-auth.md
description: api documentation of UseAuth from @tsed/platform-middlewares
---

## Usage

```typescript
import { UseAuth } from "@tsed/platform-middlewares";
```

> See [/packages/platform/platform-middlewares/src/decorators/useAuth.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-middlewares/src/decorators/useAuth.ts#L0-L0).

## Overview

```ts
function UseAuth(guardAuth: Type<any>, options?: Record<string, unknown>): Function;
```

* **guardAuth** (`Type<any>`): A middleware which implement a custom auth strategy

* **options** (`Record<string`): Optional. Object passed to the customer auth strategy

## Description

Use custom authentication strategy on your endpoint.

```typescript
@Controller('/mypath')
@UseAuth(MyAuthStrategy)
class MyCtrl {

  @Get('/')
  @UseAuth(MyAuthStrategy, {role: 'admin'})
  public getResource(){}
}
```
