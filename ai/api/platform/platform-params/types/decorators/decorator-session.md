---
title: Session from @tsed/platform-params
description: api documentation of Session from @tsed/platform-params
meta:
 - name: keywords
   description: api typescript node.js documentation Session decorator
---
# Session - @tsed/platform-params

## Usage

```typescript
import { Session } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/decorators/session.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/decorators/session.ts#L0-L0).

## Overview

```ts
function Session(expression: string): ParameterDecorator;
export function Session(options: Partial<ParamOptions>): ParameterDecorator;
export function Session(): ParameterDecorator;
```

-   **expression** (`string`): The path of the property to get.

<!-- Description -->

## Description

Session return the value from [request.session](http://expressjs.com/en/4x/api.html#req.session) object.

#### Example

```typescript
@Controller('/')
class MyCtrl {
   @Post('/')
   create(@Session() session: Express.Session) {
      console.log('Entire session', session);
   }

   @Post('/')
   create(@Session('id') id: string) {
      console.log('ID', id);
   }

   @Post('/') // Example to deserialize use from session
   create(@Session({expression: 'user', useMapper: true}) user: User) {
      console.log('user', user);
      console.log('instanceOf user', user instanceof User);
   }
}
```

> For more information on deserialization see [converters](/docs/json-mapper.md) page.
