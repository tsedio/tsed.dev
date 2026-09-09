---
title: Ignore from @tsed/schema
description: api documentation of Ignore from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Ignore decorator
---
# Ignore - @tsed/schema

## Usage

```typescript
import { Ignore } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/ignore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/ignore.ts#L0-L0).

## Overview

```ts
function Ignore(cb?: boolean | IgnoreCallback): (...args: any[]) => any;
```

-   **cb** (`boolean` | `IgnoreCallback`): Optional. Callback to know if the property must be ignored

<!-- Description -->

## Description

Ignore the property when JsonMapper serialize the class to a Plain Object JavaScript.

::: warning
Swagger will not generate documentation for the ignored property.
:::

```typescript
class User {
  @Ignore()
  _id: string;

  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @Ignore((value, ctx) => !ctx.endpoint)
  password: string;
}
```

The controller:

```typescript
import {Controller, BodyParams} from "@tsed/platform-http";
import {Post} from "@tsed/schema";
import {Person} from "../models/Person.js";

@Controller("/")
export class UsersCtrl {
  @Get("/")
  get(): User {
    const user = new User();
    user._id = "12345";
    user.firstName = "John";
    user.lastName = "Doe";
    user.password = "secretpassword";
    return
  }
}
```

The expected json object:

```json
{
 "firstName": "John",
 "lastName": "Doe"
}
```
