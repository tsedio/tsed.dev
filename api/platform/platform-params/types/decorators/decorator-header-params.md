---
url: /api/platform/platform-params/types/decorators/decorator-header-params.md
description: api documentation of HeaderParams from @tsed/platform-params
---

## Usage

```typescript
import { HeaderParams } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/decorators/headerParams.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/decorators/headerParams.ts#L0-L0).

## Overview

```ts
function HeaderParams(expression: string, useType: Type<any>): ParameterDecorator;
export function HeaderParams(expression: string): ParameterDecorator;
export function HeaderParams(useType: Type<any>): ParameterDecorator;
export function HeaderParams(options: Partial<ParamOptions>): ParameterDecorator;
export function HeaderParams(): ParameterDecorator;
```

* **expression** (`string`): The path of the property to get.

## Description

HeaderParams return the value from [`request.get()`](http://expressjs.com/en/4x/api.html#req.get) method.

#### Example

```typescript
@Controller('/')
class MyCtrl {
   @Get('/')
   get(@HeaderParams() body: any) {
      console.log('Entire body', body);
   }

   @Get('/')
   get(@HeaderParams('x-token') token: string) {
      console.log('token', id);
   }
}
```
