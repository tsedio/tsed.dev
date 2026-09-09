---
url: /api/di/types/common/decorators/decorator-controller.md
description: api documentation of Controller from @tsed/di
---

## Usage

```typescript
import { Controller } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/controller.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/controller.ts#L0-L0).

## Overview

```ts
function Controller(options: PathType | ControllerOptions): ClassDecorator;
```

* **options** (`PathType` | `ControllerOptions`): Controller path or configuration object

## Description

Declare a REST controller with a base path for routing.

Registers a class as a controller provider that handles HTTP requests.
Annotated methods define routes relative to the controller's base path.

### Usage

```typescript
import {Controller, Get} from "@tsed/di";

@Controller("/calendars")
export class CalendarCtrl {
  @Get("/:id")
  get(@PathParams("id") id: string) {
    return {id};
  }
}

// With middleware
@Controller({
  path: "/users",
  middlewares: {
    useBefore: [AuthMiddleware]
  }
})
export class UserCtrl {}

// Nested controllers
@Controller({
  path: "/admin",
  children: [UserAdminCtrl, ProductAdminCtrl]
})
export class AdminCtrl {}
```

### Options

* `path`: Base route path (string, RegExp, or array)
* `children`: Child controller classes for nested routing
* `middlewares`: Middleware configuration (useBefore, use, useAfter)
* Additional `ProviderOpts` options
