---
title: Security from @tsed/schema
description: api documentation of Security from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Security decorator
---
# Security - @tsed/schema

## Usage

```typescript
import { Security } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/security.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/security.ts#L0-L0).

## Overview

```ts
function Security(name: string, ...scopes: string[]): ClassDecorator & MethodDecorator;

export function Security(security: OpenSpecSecurity): ClassDecorator & MethodDecorator;
```

<!-- Description -->

## Description

Add security metadata on the decorated method.

## Examples

### On method

```typescript
@Controller("/")
class ModelCtrl {
   @Security("write:calendars")
   async method() {}
}
```
