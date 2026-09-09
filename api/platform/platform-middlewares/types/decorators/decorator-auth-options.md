---
url: /api/platform/platform-middlewares/types/decorators/decorator-auth-options.md
description: api documentation of AuthOptions from @tsed/platform-middlewares
---

## Usage

```typescript
import { AuthOptions } from "@tsed/platform-middlewares";
```

> See [/packages/platform/platform-middlewares/src/decorators/authOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-middlewares/src/decorators/authOptions.ts#L0-L0).

## Overview

```ts
function AuthOptions(guardAuth: Type<any>, options?: Record<string, unknown>): Function;
```

* **options** (`Record<string`): Optional. Object passed to the customer auth strategy

## Description

Change authentication options.

```typescript
@Controller('/mypath')
@UseAuth(MyAuthStrategy, {role: ''})
class MyCtrl {

  @Get('/')
  @AuthOptions(MyAuthStrategy, {role: 'admin'})
  public getResource(){}
}
```
