---
url: /api/platform/platform-params/types/decorators/decorator-cookies-params.md
description: api documentation of CookiesParams from @tsed/platform-params
---

## Usage

```typescript
import { CookiesParams } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/decorators/cookies.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/decorators/cookies.ts#L0-L0).

## Overview

```ts
function CookiesParams(expression: string | any, useType: any): ParameterDecorator;
export function CookiesParams(): ParameterDecorator;
export function CookiesParams(expression: string | any): ParameterDecorator;
export function CookiesParams(options: ParamOptions<any>): ParameterDecorator;
```

* **expression** (`string` | `any`): The path of the property to get.

* **useType** (`any`): The type of the class that to be used to deserialize the data.

## Description

Cookies or CookiesParams return the value from [request.cookies](http://expressjs.com/en/4x/api.html#req.cookies) object.

#### Example

```typescript
@Controller('/')
class MyCtrl {
   @Post('/')
   create(@Cookies() cookies: any) {
      console.log('Entire cookies', cookies);
   }

   @Post('/')
   create(@Cookies('id') id: string) {
      console.log('ID', id);
   }

   @Post('/')
   create(@Cookies('user') user: IUser) {
      console.log('user', user);
   }
}
```

> For more information on deserialization see [converters](/docs/json-mapper.md) page.
