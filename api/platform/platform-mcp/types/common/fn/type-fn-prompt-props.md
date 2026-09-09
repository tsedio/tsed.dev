---
url: /api/platform/platform-mcp/types/common/fn/type-fn-prompt-props.md
description: api documentation of FnPromptProps from @tsed/platform-mcp
---

## Usage

```typescript
import { FnPromptProps } from "@tsed/platform/platform-mcp/src/common/fn/definePrompt";
```

> See [/packages/platform/platform-mcp/src/common/fn/definePrompt.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/fn/definePrompt.ts#L0-L0).

## Overview

```ts
type FnPromptProps<Args = any> = BasePromptProps<Args> & {
    handler: PromptHandler<Args>;
};
```

## handler

```ts
handler: PromptHandler<Args>;
```
