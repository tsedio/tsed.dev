---
url: /api/specs/schema/types/decorators/common/decorator-description.md
description: api documentation of Description from @tsed/schema
---

## Usage

```typescript
import { Description } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/description.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/description.ts#L0-L0).

## Overview

```ts
function Description(description: any): (...args: any[]) => any;
```

## Description

Add a description to the class, method or property

## Examples

### On class

```typescript
@Description("description")
class Model {

}
```

### On method

```typescript
@Controller("/")
class ModelCtrl {
   @Description("description")
   async method() {}
}
```

### On parameter

```typescript
@Controller("/")
class ModelCtrl {
   async method(@Description("description") @PathParam("id") id: string) {}
}
```

### On property

```typescript
class Model {
   @Description("description")
   id: string;
}
```
