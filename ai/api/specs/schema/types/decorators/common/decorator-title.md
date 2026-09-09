---
title: Title from @tsed/schema
description: api documentation of Title from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Title decorator
---
# Title - @tsed/schema

## Usage

```typescript
import { Title } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/title.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/title.ts#L0-L0).

## Overview

```ts
function Title(title: string): (...args: any[]) => any;
```

<!-- Description -->

## Description

Add title metadata on the decorated element.

::: warning
For v6 user, use [Title](/ai/api/specs/schema/types/decorators/common/decorator-title.md) from @tsed/schema instead of @tsed/platform-http.
:::

## Example

```typescript
class Model {
   @Title("title")
   id: string;
}
```

Will produce:

```json
{
  "type": "object",
  "properties": {
    "id": {
       "type": "string",
       "title": "title"
    }
  }
}
```
