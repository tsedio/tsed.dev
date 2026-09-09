---
url: /api/core/types/errors/class-unsupported-decorator-type.md
description: api documentation of UnsupportedDecoratorType from @tsed/core
---

## Usage

```typescript
import { UnsupportedDecoratorType } from "@tsed/core";
```

> See [/packages/core/src/errors/UnsupportedDecoratorType.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/errors/UnsupportedDecoratorType.ts#L0-L0).

## Overview

```ts
class UnsupportedDecoratorType extends Error {
    name: "UNSUPPORTED_DECORATOR_TYPE";
    constructor(decorator: any, args: any[]);
}
```

## Description

Error thrown when a decorator is used in an unsupported location or context.

Provides a descriptive message indicating where the decorator was applied and why it's invalid.

## name

```ts
name: "UNSUPPORTED_DECORATOR_TYPE";
```
