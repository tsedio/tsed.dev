---
url: /api/specs/schema/types/decorators/common/decorator-name.md
description: api documentation of Name from @tsed/schema
---

## Usage

```typescript
import { Name } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/name.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/name.ts#L0-L0).

## Overview

```ts
function Name(name: any): (...args: any[]) => any;
```

## Description

Add a name metadata on the decorated element.

## Examples

### On parameters

```typescript
async myMethod(@Name("nameOf") @PathParams("id") id: string): Promise<Model>  {

}
```

### On parameters

```typescript
@Name("AliasName")
@Controller("/")
class ModelCtrl {

}
```
