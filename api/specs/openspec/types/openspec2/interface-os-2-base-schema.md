---
url: /api/specs/openspec/types/openspec2/interface-os-2-base-schema.md
description: api documentation of OS2BaseSchema from @tsed/openspec
---

## Usage

```typescript
import { OS2BaseSchema } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec2/OS2Schema.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec2/OS2Schema.ts#L0-L0).

## Overview

```ts
interface OS2BaseSchema extends OpenSpecBaseJsonSchema {
    items?: OS2Schema | OpenSpecRef;
}
```

## items

```ts
items?: OS2Schema | OpenSpecRef;
```

Required if type is "array". Describes the type of items in the array.
