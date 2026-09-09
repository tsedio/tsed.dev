---
url: >-
  /api/platform/platform-mcp/types/common/decorators/type-prompt-decorator-options.md
description: api documentation of PromptDecoratorOptions from @tsed/platform-mcp
---

## Usage

```typescript
import { PromptDecoratorOptions } from "@tsed/platform/platform-mcp/src/common/decorators/prompt";
```

> See [/packages/platform/platform-mcp/src/common/decorators/prompt.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/decorators/prompt.ts#L0-L0).

## Overview

```ts
type PromptDecoratorOptions<Args = any> = Omit<ClassPromptProps<Args>, "token" | "propertyKey">;
```

## Description

Options accepted by {@link Prompt} when decorating a class method. Matches {@link PromptProps} minus the handler reference.
