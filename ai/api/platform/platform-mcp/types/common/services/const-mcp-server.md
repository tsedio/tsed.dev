---
title: MCP_SERVER from @tsed/platform-mcp
description: api documentation of MCP_SERVER from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation MCP_SERVER const
---
# MCP_SERVER - @tsed/platform-mcp

## Usage

```typescript
import { MCP_SERVER } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/services/McpServerFactory.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/services/McpServerFactory.ts#L0-L0).

## Overview

```ts
const MCP_SERVER: import("@tsed/di").FactoryTokenProvider<McpServer>;

export type MCP_SERVER = typeof MCP_SERVER;
```

<!-- Description -->

## Description

Injectable MCP server instance configured with registered tools, resources, and prompts.
