---
url: /api/platform/platform-mcp/types/common/fn/type-prompt-props.md
description: api documentation of PromptProps from @tsed/platform-mcp
---

## Usage

```typescript
import { PromptProps } from "@tsed/platform/platform-mcp/src/common/fn/definePrompt";
```

> See [/packages/platform/platform-mcp/src/common/fn/definePrompt.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/fn/definePrompt.ts#L0-L0).

## Overview

```ts
type PromptProps<Args = any> = FnPromptProps<Args> | ClassPromptProps<Args>;
```

## Description

Union of prompt configuration accepted by {@link definePrompt}, supporting both functional and class-based handlers.
