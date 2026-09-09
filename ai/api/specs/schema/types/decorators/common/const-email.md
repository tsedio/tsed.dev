---
title: Email from @tsed/schema
description: api documentation of Email from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Email const
---
# Email - @tsed/schema

## Usage

```typescript
import { Email } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/format.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/format.ts#L0-L0).

## Overview

```ts
const Email: import("../../utils/withErrorMsg.js").ErrorChainedDecorator<() => import("../../utils/withErrorMsg.js").ErrorChainedMethods<(format: JsonFormatTypes | ValueOf<JsonFormatTypes>) => (...args: any[]) => any>>;
```

<!-- Description -->

## Description

Apply an email validation on property.

::: warning
For v6 user, use [Email](/ai/api/specs/schema/types/decorators/common/const-email.md) from @tsed/schema instead of @tsed/platform-http.
:::

## Example

### With primitive type

```typescript
class Model {
   @Email()
   property: string;
}
```

Will produce:

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "format": "email"
    }
  }
}
```

### With array type

```typescript
class Model {
   @Email()
   @CollectionOf(String)
   property: string[];
}
```

Will produce:

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "array",
      "items": {
         "type": "string",
         "format": "email"
      }
    }
  }
}
```
