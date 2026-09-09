---
url: /api/platform/platform-params/types/decorators/decorator-query-params.md
description: api documentation of QueryParams from @tsed/platform-params
---

## Usage

```typescript
import { QueryParams } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/decorators/queryParams.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/decorators/queryParams.ts#L0-L0).

## Overview

```ts
function QueryParams(expression: string, useType: Type<any>): ParameterDecorator;
export function QueryParams(expression: string): ParameterDecorator;
export function QueryParams(useType: Type<any>): ParameterDecorator;
export function QueryParams(options: Partial<ParamOptions>): ParameterDecorator;
export function QueryParams(): ParameterDecorator;
```

* **expression** (`string`): The path of the property to get.

* **useType** (`Type<any>`): The type of the class that to be used to deserialize the data.

## Description

QueryParams returns the value from [request.query](http://expressjs.com/en/4x/api.html#req.query) object.
N.B.: If the query parameter is an array, the type of the array elements needs to be specified.

#### Example

```typescript
@Controller('/')
class MyCtrl {
   @Get('/')
   get(@QueryParams() query: any) {
      console.log('Entire query', query);
   }

   @Get('/')
   get(@QueryParams('id') id: string) {
      console.log('ID', id);
   }

   @Get('/')
   get(@QueryParams('ids', String) ids: string[]) {
      console.log('IDs', ids);
   }

   @Get('/')
   get(@QueryParams('user') user: User) { // with deserialization
      console.log('user', user);
   }

   @Get('/')
   get(@QueryParams('users', User) users: User[]) { // with deserialization
      console.log('users', users);
   }
}
```

> For more information on deserialization see [converters](/docs/json-mapper.md) page.
