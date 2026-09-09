---
title: Prompt from @tsed/platform-mcp
description: api documentation of Prompt from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation Prompt decorator
---
# Prompt - @tsed/platform-mcp

## Usage

```typescript
import { Prompt } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/decorators/prompt.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/decorators/prompt.ts#L0-L0).

## Overview

```ts
function Prompt<Args = any>(options?: PromptDecoratorOptions<Args>): (target: any, propertyKey: string | symbol, _: PropertyDescriptor) => void;
```

-   **options** (`PromptDecoratorOptions<Args>`): Optional. MCP prompt metadata such as name, description, and args schema.

<!-- Description -->

## Description

Declares a Ts.ED class method as an MCP prompt and registers it through {@link definePrompt}.

### Usage

```ts
class ConciergePrompts {
  @Prompt()
  async hotelWelcome() {
    return {content: [{type: "text", text: "Welcome to Ts.ED Hotel!"}]};
  }
}
```
