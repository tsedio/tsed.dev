---
url: /api/specs/schema/types/decorators/common/decorator-ref.md
description: api documentation of Ref from @tsed/schema
---

## Usage

```typescript
import { Ref } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/ref.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/ref.ts#L0-L0).

## Overview

```ts
function Ref(ref: string): (...args: any[]) => any;
```

* **ref** (`string`): - Reference URI

## Description

Set a `$ref` value on the current schema property/parameter.

Supports local references (`#/...`) and external URLs.
