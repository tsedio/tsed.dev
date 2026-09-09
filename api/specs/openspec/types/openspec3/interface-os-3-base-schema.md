---
url: /api/specs/openspec/types/openspec3/interface-os-3-base-schema.md
description: api documentation of OS3BaseSchema from @tsed/openspec
---

## Usage

```typescript
import { OS3BaseSchema } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Schema.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Schema.ts#L0-L0).

## Overview

```ts
interface OS3BaseSchema extends OpenSpecBaseJsonSchema {
    items?: OS3Schema | OpenSpecRef;
}
```

## items

```ts
items?: OS3Schema | OpenSpecRef;
```

Required if type is "array". Describes the type of items in the array.
