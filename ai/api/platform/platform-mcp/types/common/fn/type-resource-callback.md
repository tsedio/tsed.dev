---
title: ResourceCallback from @tsed/platform-mcp
description: api documentation of ResourceCallback from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation ResourceCallback type
---
# ResourceCallback - @tsed/platform-mcp

## Usage

```typescript
import { ResourceCallback } from "@tsed/platform/platform-mcp/src/common/fn/defineResource";
```

> See [/packages/platform/platform-mcp/src/common/fn/defineResource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/fn/defineResource.ts#L0-L0).

## Overview

```ts
type ResourceCallback = (...args: Parameters<ReadResourceCallback>) => ReadResourceResult | Record<string, unknown> | Promise<ReadResourceResult | Record<string, unknown>>;
```
