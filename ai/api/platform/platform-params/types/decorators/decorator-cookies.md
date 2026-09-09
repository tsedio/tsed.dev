---
title: Cookies from @tsed/platform-params
description: api documentation of Cookies from @tsed/platform-params
meta:
 - name: keywords
   description: api typescript node.js documentation Cookies decorator
---
# Cookies - @tsed/platform-params

## Usage

```typescript
import { Cookies } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/decorators/cookies.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/decorators/cookies.ts#L0-L0).

## Overview

```ts
function Cookies(expression: string, useType: Type<any>): ParameterDecorator;
export function Cookies(expression: string): ParameterDecorator;
export function Cookies(useType: Type<any>): ParameterDecorator;
export function Cookies(options: Partial<ParamOptions>): ParameterDecorator;
export function Cookies(): ParameterDecorator;
```

-   **expression** (`string`): The path of the property to get.

-   **useType** (`Type<any>`): The type of the class that to be used to deserialize the data.

<!-- Description -->

## Description

Cookies or CookiesParams return the value from [request.cookies](http://expressjs.com/en/4x/api.html#req.cookies) object.

#### Example

```typescript
@Controller('/')
class MyCtrl {
   @Post('/')
   create(@Cookies() body: any) {
      console.log('Entire body', body);
   }

   @Post('/')
   create(@Cookies('id') id: string) {
      console.log('ID', id);
   }

   @Post('/')
   create(@Cookies('user') user: User) { // with deserialization
      console.log('user', user);
   }

   @Post('/')
   create(@Cookies('users', User) users: User[]) { // with deserialization
      console.log('users', users);
   }
}
```

> For more information on deserialization see [converters](/docs/json-mapper.md) page.
