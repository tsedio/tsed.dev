---
url: /api/platform/platform-mcp/types/common/fn/type-prompt-handler.md
description: api documentation of PromptHandler from @tsed/platform-mcp
---

## Usage

```typescript
import { PromptHandler } from "@tsed/platform/platform-mcp/src/common/fn/definePrompt";
```

> See [/packages/platform/platform-mcp/src/common/fn/definePrompt.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/fn/definePrompt.ts#L0-L0).

## Overview

```ts
type PromptHandler<Args = undefined> = Args extends undefined ? (ctx: ServerContext) => GetPromptResult | Promise<GetPromptResult> : (args: Args, ctx: ServerContext) => GetPromptResult | Promise<GetPromptResult>;
```
