---
url: >-
  /api/platform/platform-mcp/types/common/interfaces/interface-platform-mcp-pre-auth.md
description: api documentation of PlatformMcpPreAuth from @tsed/platform-mcp
---

## Usage

```typescript
import { PlatformMcpPreAuth } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpPreAuth.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpPreAuth.ts#L0-L0).

## Overview

```ts
interface PlatformMcpPreAuth {
    preAuth($ctx: PlatformContext): PlatformMcpPreAuthResult;
}
```

## Description

Custom authentication check of an MCP endpoint, run before the OAuth verification.

* Return an `AuthInfo` to authenticate the request: the OAuth verification is skipped and the identity is exposed
  to the handlers.
* Return `undefined` when the check does not apply to the request: the OAuth verification runs when the endpoint
  declares an issuer, and the request is rejected with `401` otherwise.
* Throw to reject the request.

## preAuth

```ts
preAuth($ctx: PlatformContext): PlatformMcpPreAuthResult;
```
