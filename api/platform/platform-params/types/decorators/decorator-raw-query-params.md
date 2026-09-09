---
url: /api/platform/platform-params/types/decorators/decorator-raw-query-params.md
description: api documentation of RawQueryParams from @tsed/platform-params
---

## Usage

```typescript
import { RawQueryParams } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/decorators/queryParams.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/decorators/queryParams.ts#L0-L0).

## Overview

```ts
function RawQueryParams(expression: string): ParameterDecorator;
export function RawQueryParams(options: Partial<ParamOptions>): ParameterDecorator;
export function RawQueryParams(): ParameterDecorator;
```

* **expression** (`string`): The path of the property to get.

## Description

RawQueryParams return the value from [request.query](http://expressjs.com/en/4x/api.html#req.query) object.

Any validation and transformation are performed on the value. Use [pipes](/docs/pipes.html) to validate and/or transform the value.

#### Example

```typescript
@Controller('/')
class MyCtrl {
   @Get('/')
   get(@RawPathParams() params: any) {
      console.log('Entire params', params);
   }

   @Get('/')
   get(@RawPathParams('id') id: string) {
      console.log('ID', id);
   }
}
```

> For more information on deserialization see [converters](/docs/json-mapper.md) page.
