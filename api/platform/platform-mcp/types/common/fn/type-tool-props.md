---
url: /api/platform/platform-mcp/types/common/fn/type-tool-props.md
description: api documentation of ToolProps from @tsed/platform-mcp
---

## Usage

```typescript
import { ToolProps } from "@tsed/platform/platform-mcp/src/common/fn/defineTool";
```

> See [/packages/platform/platform-mcp/src/common/fn/defineTool.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/fn/defineTool.ts#L0-L0).

## Overview

```ts
type ToolProps<Input, Output = unknown> = FnToolProps<Input, Output> | ClassToolProps<Input, Output>;
```

## Description

Union of functional and class-based tool definitions.
