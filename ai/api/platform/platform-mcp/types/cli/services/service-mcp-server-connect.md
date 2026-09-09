---
title: mcpServerConnect from @tsed/platform-mcp
description: api documentation of mcpServerConnect from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation mcpServerConnect service
---
# mcpServerConnect - @tsed/platform-mcp

## Usage

```typescript
import { mcpServerConnect } from "@tsed/platform/platform-mcp/src/cli/services/mcpServerConnect";
```

> See [/packages/platform/platform-mcp/src/cli/services/mcpServerConnect.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/cli/services/mcpServerConnect.ts#L0-L0).

## Overview

```ts
function mcpServerConnect(mode: "streamable-http" | "stdio"): Promise<import("@modelcontextprotocol/server").McpServer>;
```
