---
url: /api/platform/platform-params/types/decorators/decorator-raw-path-params.md
description: api documentation of RawPathParams from @tsed/platform-params
---

## Usage

```typescript
import { RawPathParams } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/decorators/pathParams.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/decorators/pathParams.ts#L0-L0).

## Overview

```ts
function RawPathParams(expression: string): ParameterDecorator;
export function RawPathParams(options: Partial<ParamOptions>): ParameterDecorator;
export function RawPathParams(): ParameterDecorator;
```

* **expression** (`string`): The path of the property to get.

## Description

RawPathParams return the raw value from [request.params](http://expressjs.com/en/4x/api.html#req.params) object.

Any validation and transformation are performed on the value. Use [pipes](/docs/pipes.html) to validate and/or transform the value.

#### Example

```typescript
@Controller('/')
class MyCtrl {
   @Get('/')
   get(@RawPathParams() params: string) {
      console.log('Entire params', params);
   }

   @Get('/')
   get(@RawPathParams('id') id: string) {
      console.log('ID', id);
   }
}
```

> For more information on deserialization see [converters](/docs/json-mapper.md) page.
