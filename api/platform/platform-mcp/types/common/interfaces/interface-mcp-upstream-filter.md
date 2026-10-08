---
url: >-
  /api/platform/platform-mcp/types/common/interfaces/interface-mcp-upstream-filter.md
description: api documentation of McpUpstreamFilter from @tsed/platform-mcp
---

## Usage

```typescript
import { McpUpstreamFilter } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpUpstreamSettings.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpUpstreamSettings.ts#L0-L0).

## Overview

```ts
interface McpUpstreamFilter {
    include?: (string | RegExp)[];
    exclude?: (string | RegExp)[];
}
```

## Description

Include/exclude filter evaluated on upstream names (tools, prompts) or URIs (resources).

## include:

```ts
include?: (string | RegExp)[];
```

## exclude:

```ts
exclude?: (string | RegExp)[];
```
