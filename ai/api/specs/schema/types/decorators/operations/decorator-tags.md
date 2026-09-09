---
title: Tags from @tsed/schema
description: api documentation of Tags from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Tags decorator
---
# Tags - @tsed/schema

## Usage

```typescript
import { Tags } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/tags.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/tags.ts#L0-L0).

## Overview

```ts
function Tags(...tags: (string | OpenSpecTag)[]): ClassDecorator & MethodDecorator;
```

<!-- Description -->

## Description

Add metadata tags to the decorated element (class or method).

## Examples

### On method

```typescript
@Controller("/")
class MyController {
 @Tags("api")
 get() {}
}
```

### On Class

```typescript
@Controller("/")
@Tags("api")
class MyController {
 get() {}
}
```
