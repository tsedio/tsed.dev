---
title: ToolProps from @tsed/platform-mcp
description: api documentation of ToolProps from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation ToolProps type
---
# ToolProps - @tsed/platform-mcp

## Usage

```typescript
import { ToolProps } from "@tsed/platform/platform-mcp/src/common/fn/defineTool";
```

> See [/packages/platform/platform-mcp/src/common/fn/defineTool.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/fn/defineTool.ts#L0-L0).

## Overview

```ts
type ToolProps<Input, Output = unknown> = FnToolProps<Input, Output> | ClassToolProps<Input, Output>;
```

<!-- Description -->

## Description

Union of functional and class-based tool definitions.
