---
title: OnResponse from @tsed/platform-http
description: api documentation of OnResponse from @tsed/platform-http
meta:
 - name: keywords
   description: api typescript node.js documentation OnResponse interface
---
# OnResponse - @tsed/platform-http

## Usage

```typescript
import { OnResponse } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/interfaces/OnResponse.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/interfaces/OnResponse.ts#L0-L0).

## Overview

```ts
interface OnResponse {
    $onResponse(ctx: PlatformResponse): void;
}
```

<!-- Members -->

## $onResponse

```ts
$onResponse(ctx: PlatformResponse): void;
```
