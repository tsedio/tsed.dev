---
title: MaxItems from @tsed/schema
description: api documentation of MaxItems from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation MaxItems const
---
# MaxItems - @tsed/schema

## Usage

```typescript
import { MaxItems } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/collections/maxItems.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/collections/maxItems.ts#L0-L0).

## Overview

```ts
const MaxItems: import("../../utils/withErrorMsg.js").ErrorChainedDecorator<(maxItems: number) => (...args: any[]) => any>;
```

<!-- Description -->

## Description

Sets the maximum number of items allowed in an array.

The `@MaxItems()` decorator validates that an array has at most the specified number
of elements. This is useful for enforcing size limits on collections to prevent
excessive data, manage performance, or enforce business rules.

### Basic Usage

```typescript
class UserModel {
  @CollectionOf(String)
  @MaxItems(5)
  tags: string[];
  // Maximum 5 tags allowed
}
```

Generated schema:

```json
{
  "type": "object",
  "properties": {
    "tags": {
      "type": "array",
      "maxItems": 5,
      "items": {
        "type": "string"
      }
    }
  }
}
```

### With MinItems - Range Validation

```typescript
class TeamModel {
  @CollectionOf(String)
  @MinItems(1)
  @MaxItems(10)
  members: string[];
  // Must have between 1 and 10 members
}
```

### API Rate Limiting

```typescript
class BulkRequest {
  @CollectionOf(Number)
  @MaxItems(100)
  ids: number[];
  // Limit bulk operations to 100 items
}
```

### File Uploads

```typescript
class FileUpload {
  @CollectionOf(Object)
  @MaxItems(5)
  attachments: File[];
  // Maximum 5 file attachments
}
```

### Validation Examples

```typescript
@MaxItems(3)
items: string[];

// Valid:
[]                    // 0 items (≤ 3)
["a"]                 // 1 item (≤ 3)
["a", "b", "c"]       // 3 items (≤ 3)

// Invalid:
["a", "b", "c", "d"]  // 4 items (> 3)
```

### Use Cases

-   **Performance**: Limit collection sizes to prevent memory issues
-   **Business Rules**: Enforce maximum quantities (cart items, selections)
-   **API Protection**: Prevent abuse with excessive bulk requests
-   **UI Constraints**: Match front-end limitations (max selections)
-   **Data Quality**: Encourage focused, manageable data sets

### Combining with Other Validators

```typescript
class SearchQuery {
  @CollectionOf(String)
  @MinItems(1)
  @MaxItems(10)
  @UniqueItems()
  keywords: string[];
  // 1-10 unique search keywords
}
```

### Important Notes

-   The value must be a **non-negative integer** (0 or greater)
-   Throws an error if a negative value is provided
-   Empty arrays (length 0) always pass maxItems validation
-   Can be combined with custom error messages using ajv-errors
