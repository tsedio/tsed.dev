---
url: /api/platform/platform-params/types/decorators/decorator-locals.md
description: api documentation of Locals from @tsed/platform-params
---

## Usage

```typescript
import { Locals } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/decorators/locals.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/decorators/locals.ts#L0-L0).

## Overview

```ts
function Locals(expression: string): ParameterDecorator;
export function Locals(): ParameterDecorator;
```

* **expression** (`string`): The path of the property to get.

## Description

Locals return the value from [response.locals](http://expressjs.com/en/4x/api.html#res.locals) object.

::: tip
Locals are generally used by express and third-party like templating engine to render a page/template.
See [Templating](https://tsed.dev/tutorials/templating.html) section for more details.
:::

#### Example

```typescript
@Middleware()
class LocalsMiddleware {
  use(@Locals() locals: any) {
     // set some on locals
     locals.user = "user"
  }
}

@Controller('/')
@UseBefore(LocalsMiddleware)
class MyCtrl {
   @Get('/')
   @View('home.ejs') // will use locals and returned data to render the page
   get(@Locals('user') user: any) {
      console.log('user', user);

      return {
        description: 'Hello world'
      }
   }
}
```
