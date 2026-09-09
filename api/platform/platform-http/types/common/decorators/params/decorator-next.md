---
url: /api/platform/platform-http/types/common/decorators/params/decorator-next.md
description: api documentation of Next from @tsed/platform-http
---

## Usage

```typescript
import { Next } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/decorators/params/next.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/decorators/params/next.ts#L0-L0).

## Overview

```ts
function Next(): ParameterDecorator;
global {
    namespace TsED {
        interface NextFunction extends Function {
        }
    }
}

export type Next = TsED.NextFunction;
```

## Description

Get the Next function (for express application and middleware).
