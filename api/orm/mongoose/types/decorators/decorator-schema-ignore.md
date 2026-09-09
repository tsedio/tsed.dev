---
url: /api/orm/mongoose/types/decorators/decorator-schema-ignore.md
description: api documentation of SchemaIgnore from @tsed/mongoose
---

## Usage

```typescript
import { SchemaIgnore } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/schemaIgnore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/schemaIgnore.ts#L0-L0).

## Overview

```ts
function SchemaIgnore(): Function;
```

## Description

Do not apply this property to schema (create virtual property)

### Example

```typescript
@Model()
@SchemaIgnore()
@Property()
kind: string;

```
