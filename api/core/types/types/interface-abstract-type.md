---
url: /api/core/types/types/interface-abstract-type.md
description: api documentation of AbstractType from @tsed/core
---

## Usage

```typescript
import { AbstractType } from "@tsed/core";
```

> See [/packages/core/src/types/Type.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/types/Type.ts#L0-L0).

## Overview

```ts
interface AbstractType<T> extends Function {
    prototype: T;
}
```

## Description

Describes an abstract type (abstract class), useful for declaring dependencies that should not be instantiated directly.

## prototype

```ts
prototype: T;
```
