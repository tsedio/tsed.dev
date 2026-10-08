---
url: >-
  /api/platform/platform-mcp/types/common/interfaces/type-platform-mcp-pre-auth-option.md
description: api documentation of PlatformMcpPreAuthOption from @tsed/platform-mcp
---

## Usage

```typescript
import { PlatformMcpPreAuthOption } from "@tsed/platform/platform-mcp/src/common/interfaces/PlatformMcpPreAuth";
```

> See [/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpPreAuth.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpPreAuth.ts#L0-L0).

## Overview

```ts
type PlatformMcpPreAuthOption = (($ctx: PlatformContext) => PlatformMcpPreAuthResult) | TokenProvider<PlatformMcpPreAuth>;
```

## Description

Accepted forms of the `auth.preAuth` option: a function, or a DI token resolving to a
{@link PlatformMcpPreAuth} provider.
