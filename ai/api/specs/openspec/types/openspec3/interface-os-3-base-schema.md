---
title: OS3BaseSchema from @tsed/openspec
description: api documentation of OS3BaseSchema from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS3BaseSchema interface
---
# OS3BaseSchema - @tsed/openspec

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

<!-- Members -->

## items

```ts
items?: OS3Schema | OpenSpecRef;
```

Required if type is "array". Describes the type of items in the array.
