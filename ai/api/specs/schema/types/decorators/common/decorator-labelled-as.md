---
title: LabelledAs from @tsed/schema
description: api documentation of LabelledAs from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation LabelledAs decorator
---
# LabelledAs - @tsed/schema

## Usage

```typescript
import { LabelledAs } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/labelledAs.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/labelledAs.ts#L0-L0).

## Overview

```ts
function LabelledAs(label: string, includeCollection?: false | "collection"): PropertyDecorator;
```

-   **label** (`string`): The name of the label

-   **includeCollection** (`false` | `"collection"`): Optional. Add the label to the collection. By default, the label is added to the item of the collection it the property is a collection.

<!-- Description -->

## Description

Use label to create ref on the current decorated property.

### Example

```ts
class Model {
  // For single property
  ＠LabelledAs("UserSchema")
  name: string;

  // For collection
  ＠LabelledAs("UserCollectionSchema", "collection")
  users: User[];
}
```
