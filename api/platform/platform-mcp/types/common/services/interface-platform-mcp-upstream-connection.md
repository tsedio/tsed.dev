---
url: >-
  /api/platform/platform-mcp/types/common/services/interface-platform-mcp-upstream-connection.md
description: api documentation of PlatformMcpUpstreamConnection from @tsed/platform-mcp
---

## Usage

```typescript
import { PlatformMcpUpstreamConnection } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/services/PlatformMcpGatewayService.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/platform/platform-mcp/src/common/services/PlatformMcpGatewayService.ts#L0-L0).

## Overview

```ts
interface PlatformMcpUpstreamConnection {
    client: Client;
    getCatalog(): Promise<PlatformMcpUpstreamCatalog>;
    run<T>(fn: () => Promise<T>): Promise<T>;
}
```

## Description

Live connection to an upstream MCP server and its cached catalog.

## client

```ts
client: Client;
```

## getCatalog

```ts
getCatalog(): Promise<PlatformMcpUpstreamCatalog>;
```

## run

```ts
run<T>(fn: () => Promise<T>): Promise<T>;
```

Runs an upstream request, keeping the connection out of the pool eviction while it is pending.
