---
url: /api/platform/platform-mcp/types/common/fn/type-fn-tool-props.md
description: api documentation of FnToolProps from @tsed/platform-mcp
---

## Usage

```typescript
import { FnToolProps } from "@tsed/platform/platform-mcp/src/common/fn/defineTool";
```

> See [/packages/platform/platform-mcp/src/common/fn/defineTool.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/fn/defineTool.ts#L0-L0).

## Overview

```ts
type FnToolProps<Input, Output = unknown> = BaseToolProps<Input, Output> & {
    name: string;
    handler: ToolCallback<Input, Output>;
};
```

## name

```ts
name: string;
```

## handler

```ts
handler: ToolCallback<Input, Output>;
```
