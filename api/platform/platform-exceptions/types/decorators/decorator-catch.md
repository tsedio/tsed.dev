---
url: /api/platform/platform-exceptions/types/decorators/decorator-catch.md
description: api documentation of Catch from @tsed/platform-exceptions
---

## Usage

```typescript
import { Catch } from "@tsed/platform-exceptions";
```

> See [/packages/platform/platform-exceptions/src/decorators/catch.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-exceptions/src/decorators/catch.ts#L0-L0).

## Overview

```ts
function Catch(...types: (Type<Error | any> | string)[]): (target: any) => void;
```

## Description

Register a new class to handle an specific exception.
