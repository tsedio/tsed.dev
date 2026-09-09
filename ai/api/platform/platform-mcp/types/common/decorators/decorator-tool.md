---
title: Tool from @tsed/platform-mcp
description: api documentation of Tool from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation Tool decorator
---
# Tool - @tsed/platform-mcp

## Usage

```typescript
import { Tool } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/decorators/tool.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/decorators/tool.ts#L0-L0).

## Overview

```ts
function Tool<Input = any, Output = any>(name?: string, options?: Partial<ClassToolProps<Input, Output>>): (target: any, propertyKey: string | symbol, _: PropertyDescriptor) => void;
```

-   **name** (`string`): Optional. override for the exported tool name; defaults to the method key.

-   **options** (`Partial<ClassToolProps<Input`): Optional. Additional  such as descriptions and schema overrides.

<!-- Description -->

## Description

Decorator that registers a class method as an MCP tool and binds it to the Ts.ED DI container.

### Usage

```ts
class MathTools {
  @Tool()
  async add({a, b}: {a: number; b: number}) {
    return {content: [{type: "text", text: String(a + b)}]};
  }
}
```
