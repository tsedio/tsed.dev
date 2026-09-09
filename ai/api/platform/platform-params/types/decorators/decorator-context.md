---
title: Context from @tsed/platform-params
description: api documentation of Context from @tsed/platform-params
meta:
 - name: keywords
   description: api typescript node.js documentation Context decorator
---
# Context - @tsed/platform-params

## Usage

```typescript
import { Context } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/decorators/context.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/decorators/context.ts#L0-L0).

## Overview

```ts
function Context(expression: string): ParameterDecorator;
export function Context(): ParameterDecorator;
export type Context = BaseContext;
```

-   **expression** (`string`): The path of the property to get.

<!-- Description -->

## Description

Context decorator return the [PlatformContext](/ai/api/platform/platform-http/types/common/domain/class-platform-context.md) created by Ts.ED when request is handled by the server.

It contains some information as following:

-   The request id,
-   The request container used by the Ts.ED DI. It contain all services annotated with `@Scope(ProviderScope.REQUEST)`,
-   The current [JsonMethodStore](/ai/api/specs/schema/types/components/stores/class-json-method-store.md) resolved by Ts.ED during the request,
-   The data return by the previous endpoint if you use multiple handler on the same route. By default data is empty.

::: tip
The [PlatformContext](/ai/api/platform/platform-http/types/common/domain/class-platform-context.md) inherit from Map class. So you can store any information with.
:::

#### Example

```typescript
@Middleware()
class AuthTokenMiddleware {
  use(@Req() request: Req, @Context() context: PlatformContext) {
     if (!context.has("auth")){
       context.set('auth', new AuthToken(request))
     }

     try {
       context.get("auth").claims() // check token
     } catch(er){
       throw new Forbidden("Access forbidden - Bad token")
     }
  }
}

@Controller('/')
@UseBefore(AuthTokenMiddleware) // protect all routes for this controller
class MyCtrl {
   @Get('/')
   get(@Context('auth') auth: AuthToken) {
      console.log('auth', auth);
      console.log('auth.accessToken', auth.accessToken);
      console.log('auth.idToken', auth.idToken);
   }
}
```
