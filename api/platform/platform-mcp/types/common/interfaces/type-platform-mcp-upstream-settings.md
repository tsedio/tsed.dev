---
url: >-
  /api/platform/platform-mcp/types/common/interfaces/type-platform-mcp-upstream-settings.md
description: api documentation of PlatformMcpUpstreamSettings from @tsed/platform-mcp
---

## Usage

```typescript
import { PlatformMcpUpstreamSettings } from "@tsed/platform/platform-mcp/src/common/interfaces/PlatformMcpUpstreamSettings";
```

> See [/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpUpstreamSettings.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpUpstreamSettings.ts#L0-L0).

## Overview

```ts
type PlatformMcpUpstreamSettings = McpHttpUpstreamSettings | McpStdioUpstreamSettings;
```

## Description

Third-party MCP server exposed through a Ts.ED MCP endpoint.
