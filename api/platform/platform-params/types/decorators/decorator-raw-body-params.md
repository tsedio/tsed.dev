---
url: /api/platform/platform-params/types/decorators/decorator-raw-body-params.md
description: api documentation of RawBodyParams from @tsed/platform-params
---

## Usage

```typescript
import { RawBodyParams } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/decorators/bodyParams.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/decorators/bodyParams.ts#L0-L0).

## Overview

```ts
function RawBodyParams(options: Partial<Omit<ParamOptions, "expression">>): ParameterDecorator;
export function RawBodyParams(): ParameterDecorator;
```

## Description

RawBodyParams return the value from [request.body](http://expressjs.com/en/4x/api.html#req.body) as a Buffer.

#### Example

```typescript
@Controller('/')
class MyCtrl {
   @Post('/')
   create(@RawBodyParams() body: Buffer) {
      console.log('Entire body', body.toString("utf8"));
   }
}
```
