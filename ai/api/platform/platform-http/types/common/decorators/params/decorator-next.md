---
title: Next from @tsed/platform-http
description: api documentation of Next from @tsed/platform-http
meta:
 - name: keywords
   description: api typescript node.js documentation Next decorator
---
# Next - @tsed/platform-http

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

<!-- Description -->

## Description

Get the Next function (for express application and middleware).
