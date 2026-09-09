---
url: /api/platform/platform-mcp/types/common/fn/type-tool-callback.md
description: api documentation of ToolCallback from @tsed/platform-mcp
---

## Usage

```typescript
import { ToolCallback } from "@tsed/platform/platform-mcp/src/common/fn/defineTool";
```

> See [/packages/platform/platform-mcp/src/common/fn/defineTool.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/fn/defineTool.ts#L0-L0).

## Overview

```ts
type ToolCallback<Args = undefined, Output = unknown> = (args: Args, ctx: ServerContext) => CallToolResult | Promise<CallToolResult> | Output | Promise<Output>;
```

## Description

Signature implemented by MCP tool handlers invoked through {@link defineTool}.
