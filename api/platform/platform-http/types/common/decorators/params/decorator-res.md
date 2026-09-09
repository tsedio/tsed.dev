---
url: /api/platform/platform-http/types/common/decorators/params/decorator-res.md
description: api documentation of Res from @tsed/platform-http
---

## Usage

```typescript
import { Res } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/decorators/params/response.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/decorators/params/response.ts#L0-L0).

## Overview

```ts
function Res(): ParameterDecorator;

export interface Response extends TsED.Response {
}

export interface Res extends Response {
}
```

## Description

Request service.
