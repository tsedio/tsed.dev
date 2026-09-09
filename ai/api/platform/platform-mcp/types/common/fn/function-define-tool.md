---
title: defineTool from @tsed/platform-mcp
description: api documentation of defineTool from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation defineTool function
---
# defineTool - @tsed/platform-mcp

## Usage

```typescript
import { defineTool } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/fn/defineTool.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/fn/defineTool.ts#L0-L0).

## Overview

```ts
function defineTool<Input, Output = unknown>(options: FnToolProps<Input, Output>): TokenProvider;
export function defineTool<Input, Output = unknown>(options: ClassToolProps<Input, Output>): TokenProvider;
```

-   **options** (`FnToolProps<Input`): Functional or class-based tool configuration.

<!-- Description -->

## Description

Registers an MCP tool provider and wraps its handler with error logging plus schema conversion.

### Usage

```ts
defineTool({
  name: "add",
  handler: async ({a, b}) => ({content: [{type: "text", text: String(a + b)}]})
});
```
