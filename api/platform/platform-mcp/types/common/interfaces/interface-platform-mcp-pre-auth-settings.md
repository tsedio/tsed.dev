---
url: >-
  /api/platform/platform-mcp/types/common/interfaces/interface-platform-mcp-pre-auth-settings.md
description: api documentation of PlatformMcpPreAuthSettings from @tsed/platform-mcp
---

## Usage

```typescript
import { PlatformMcpPreAuthSettings } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpPreAuth.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpPreAuth.ts#L0-L0).

## Overview

```ts
interface PlatformMcpPreAuthSettings {
    preAuth: PlatformMcpPreAuthOption;
}
```

## Description

Auth configuration of an MCP endpoint only protected by a custom check, without OAuth.

## preAuth

```ts
preAuth: PlatformMcpPreAuthOption;
```
