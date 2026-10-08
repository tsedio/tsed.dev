---
url: >-
  /api/platform/platform-mcp/types/common/services/interface-platform-mcp-upstream-catalog.md
description: api documentation of PlatformMcpUpstreamCatalog from @tsed/platform-mcp
---

## Usage

```typescript
import { PlatformMcpUpstreamCatalog } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/services/PlatformMcpGatewayService.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/platform/platform-mcp/src/common/services/PlatformMcpGatewayService.ts#L0-L0).

## Overview

```ts
interface PlatformMcpUpstreamCatalog {
    tools: Tool[];
    resources: Resource[];
    resourceTemplates: ResourceTemplateType[];
    prompts: Prompt[];
}
```

## Description

Tools, resources and prompts advertised by an upstream MCP server.

## tools

```ts
tools: Tool[];
```

## resources

```ts
resources: Resource[];
```

## resourceTemplates

```ts
resourceTemplates: ResourceTemplateType[];
```

## prompts

```ts
prompts: Prompt[];
```
