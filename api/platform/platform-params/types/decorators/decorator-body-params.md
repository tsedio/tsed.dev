---
url: /api/platform/platform-params/types/decorators/decorator-body-params.md
description: api documentation of BodyParams from @tsed/platform-params
---

## Usage

```typescript
import { BodyParams } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/decorators/bodyParams.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/decorators/bodyParams.ts#L0-L0).

## Overview

```ts
function BodyParams(expression: string, useType: Type<any>): ParameterDecorator;
export function BodyParams(expression: string): ParameterDecorator;
export function BodyParams(useType: Type<any>): ParameterDecorator;
export function BodyParams(options: Partial<ParamOptions>): ParameterDecorator;
export function BodyParams(): ParameterDecorator;
```

* **expression** (`string`): The path of the property to get.

* **useType** (`Type<any>`): The type of the class that to be used to deserialize the data.

## Description

BodyParams return the value from [request.body](http://expressjs.com/en/4x/api.html#req.body) object.

#### Example

```typescript
@Controller('/')
class MyCtrl {
   @Post('/')
   create(@BodyParams() body: any) {
      console.log('Entire body', body);
   }

   @Post('/')
   create(@BodyParams('id') id: string) {
      console.log('ID', id);
   }

   @Post('/')
   create(@BodyParams('user') user: User) { // with deserialization
      console.log('user', user);
   }

   @Post('/')
   create(@BodyParams('users', User) users: User[]) { // with deserialization
      console.log('users', users);
   }
}
```

> For more information on deserialization see [converters](/docs/json-mapper.md) page.
