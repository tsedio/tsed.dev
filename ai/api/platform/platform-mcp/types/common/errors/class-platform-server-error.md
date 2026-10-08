---
title: PlatformServerError from @tsed/platform-mcp
description: api documentation of PlatformServerError from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformServerError class
---
# PlatformServerError - @tsed/platform-mcp

## Usage

```typescript
import { PlatformServerError } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/errors/PlatformServerError.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/platform/platform-mcp/src/common/errors/PlatformServerError.ts#L0-L0).

## Overview

```ts
class PlatformServerError extends OAuthError {
    constructor(message: string);
}
```

<!-- Description -->

## Description

The authorization server or the configuration failed, whatever the presented token. Answered as `500 server_error`.

<!-- Members -->
