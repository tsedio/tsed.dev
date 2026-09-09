---
url: /api/specs/schema/types/decorators/common/decorator-default-msg.md
description: api documentation of DefaultMsg from @tsed/schema
---

## Usage

```typescript
import { DefaultMsg } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/defaultMsg.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/defaultMsg.ts#L0-L0).

## Overview

```ts
function DefaultMsg(message: string): ClassDecorator;
```

## Description

Set default error message.

## Example

```typescript
@DefaultMsg("foo should be a string")
class Model {
   property: number;
}
```

Will produce:

```json
{
  "type": "object",
  "properties": {
    "property": "number"
  }
  "errorMessage": {
    "_": "foo should be a string"
  }
}
```
