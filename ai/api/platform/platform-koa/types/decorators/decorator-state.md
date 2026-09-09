---
title: State from @tsed/platform-koa
description: api documentation of State from @tsed/platform-koa
meta:
 - name: keywords
   description: api typescript node.js documentation State decorator
---
# State - @tsed/platform-koa

## Usage

```typescript
import { State } from "@tsed/platform-koa";
```

> See [/packages/platform/platform-koa/src/decorators/state.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-koa/src/decorators/state.ts#L0-L0).

## Overview

```ts
function State(expression: string): ParameterDecorator;
export function State(): ParameterDecorator;
```

-   **expression** (`string`): The path of the property to get.

<!-- Description -->

## Description

State return the value from koa.ctx.state object.

#### Example

```typescript
@Middleware()
class StateMiddleware {
  use(@State() state: any) {
     // set some on locals
     state.user = "user"
  }
}

@Controller('/')
@UseBefore(StateMiddleware)
class MyCtrl {
   @Get('/')
   @View('home.ejs') // will use locals and returned data to render the page
   get(@State('user') user: any) {
      console.log('user', user);

      return {
        description: 'Hello world'
      }
   }
}
```
