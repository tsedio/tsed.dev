---
url: /api/specs/schema/types/decorators/operations/decorator-tags.md
description: api documentation of Tags from @tsed/schema
---

## Usage

```typescript
import { Tags } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/tags.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/tags.ts#L0-L0).

## Overview

```ts
function Tags(...tags: (string | OpenSpecTag)[]): ClassDecorator & MethodDecorator;
```

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
