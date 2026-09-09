---
url: /api/specs/schema/types/decorators/operations/decorator-accept-mime.md
description: api documentation of AcceptMime from @tsed/schema
---

## Usage

```typescript
import { AcceptMime } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/acceptMime.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/acceptMime.ts#L0-L0).

## Overview

```ts
function AcceptMime(...mimes: string[]): ClassDecorator & MethodDecorator;
```

## Description

Set a mime list which are acceptable and checks if the specified content types are acceptable, based on the request’s Accept HTTP header field.

```typescript
 @Controller('/mypath')
 export class MyCtrl {

   @Get('/')
   @AcceptMime('application/x-www-form-urlencoded')
   public getResource(){}
 }
```
