---
title: definePrompt from @tsed/platform-mcp
description: api documentation of definePrompt from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation definePrompt function
---
# definePrompt - @tsed/platform-mcp

## Usage

```typescript
import { definePrompt } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/fn/definePrompt.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/fn/definePrompt.ts#L0-L0).

## Overview

```ts
function definePrompt<Args = any>(options: FnPromptProps<Args>): TokenProvider;
export function definePrompt<Args = any>(options: ClassPromptProps<Args>): TokenProvider;
```

-   **options** (`FnPromptProps<Args>`): Functional or class-based prompt configuration.

<!-- Description -->

## Description

Registers an MCP prompt provider with the Ts.ED injector and returns the associated token.

### Usage

```ts
definePrompt({
  name: "weather",
  description: "Summaries today's forecast",
  handler: async () => ({content: [{type: "text", text: "Sunny"}]})
});
```
