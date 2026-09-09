---
url: /api/platform/platform-params/types/decorators/decorator-path-params.md
description: api documentation of PathParams from @tsed/platform-params
---

## Usage

```typescript
import { PathParams } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/decorators/pathParams.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/decorators/pathParams.ts#L0-L0).

## Overview

```ts
function PathParams(expression: string, useType: Type<any>): ParameterDecorator;
export function PathParams(expression: string): ParameterDecorator;
export function PathParams(useType: Type<any>): ParameterDecorator;
export function PathParams(options: Partial<ParamOptions>): ParameterDecorator;
export function PathParams(): ParameterDecorator;
```

* **expression** (`string`): The path of the property to get.

* **useType** (`Type<any>`): The type of the class that to be used to deserialize the data.

## Description

PathParams return the value from [request.params](http://expressjs.com/en/4x/api.html#req.params) object.

#### Example

```typescript
@Controller('/')
class MyCtrl {
   @Get('/')
   get(@PathParams() params: any) {
      console.log('Entire params', params);
   }

   @Get('/')
   get(@PathParams('id') id: string) {
      console.log('ID', id);
   }

   @Get('/')
   get(@PathParams({expression: 'id', useType: () => new MyCustomModel() }) id: string) {
      console.log('ID', id);
   }
}
```

> For more information on deserialization see [converters](/docs/json-mapper.md) page.
