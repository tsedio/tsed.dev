---
title: InjectContext from @tsed/di
description: api documentation of InjectContext from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation InjectContext decorator
---
# InjectContext - @tsed/di

## Usage

```typescript
import { InjectContext } from "@tsed/di";
```

> See [/packages/di/src/node/decorators/injectContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/node/decorators/injectContext.ts#L0-L0).

## Overview

```ts
function InjectContext(transform?: ($ctx: DIContext) => unknown): PropertyDecorator;
```

<!-- Description -->

## Description

Inject a context like PlatformContext or any BaseContext.

```typescript
@Injectable()
export class MyService {
  @InjectContext()
  ctx?: Context;
}
```
