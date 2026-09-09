---
url: /api/platform/platform-multer/types/common/errors/class-multer-exception.md
description: api documentation of MulterException from @tsed/platform-multer
---

## Usage

```typescript
import { MulterException } from "@tsed/platform-multer";
```

> See [/packages/platform/platform-multer/src/common/errors/MulterException.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-multer/src/common/errors/MulterException.ts#L0-L0).

## Overview

```ts
class MulterException extends BadRequest {
    origin: MulterError;
    constructor(er: MulterError);
}
```

## Description

Exception thrown when a Multer error occurs during file upload operations.
Extends the BadRequest exception with Multer-specific properties.

## Constructor

```ts
constructor(er: MulterError);
```

Creates a new MulterException

## origin

```ts
origin: MulterError;
```
