---
title: OS2Header from @tsed/openspec
description: api documentation of OS2Header from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS2Header interface
---
# OS2Header - @tsed/openspec

## Usage

```typescript
import { OS2Header } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec2/OS2Header.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec2/OS2Header.ts#L0-L0).

## Overview

```ts
interface OS2Header extends OS2BaseSchema {
    type: "string" | "number" | "integer" | "boolean" | "array";
}
```

<!-- Members -->

## type

```ts
type: "string" | "number" | "integer" | "boolean" | "array";
```

The type of the object. The value MUST be one of `string`, `number`, `integer`, `boolean`, or `array`.
