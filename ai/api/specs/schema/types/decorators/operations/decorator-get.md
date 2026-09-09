---
title: Get from @tsed/schema
description: api documentation of Get from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Get decorator
---
# Get - @tsed/schema

## Usage

```typescript
import { Get } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/route.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/route.ts#L0-L0).

## Overview

```ts
function Get(path?: string | RegExp | unknown, ...args: unknown[]): import("./operation.js").RouteChainedDecorators;
```

<!-- Description -->

## Description

This method is just like the `router.METHOD()` methods, except that it matches all HTTP methods (verbs).

This method is extremely useful for mapping “global” logic for specific path prefixes or arbitrary matches.
For example, if you placed the following route at the top of all other route definitions, it would require that
all routes from that point on would require authentication, and automatically load a user.
Keep in mind that these callbacks do not have to act as end points; loadUser can perform a task, then call next()
to continue matching subsequent routes.
