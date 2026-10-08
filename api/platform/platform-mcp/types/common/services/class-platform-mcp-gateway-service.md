---
url: >-
  /api/platform/platform-mcp/types/common/services/class-platform-mcp-gateway-service.md
description: api documentation of PlatformMcpGatewayService from @tsed/platform-mcp
---

## Usage

```typescript
import { PlatformMcpGatewayService } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/services/PlatformMcpGatewayService.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/platform/platform-mcp/src/common/services/PlatformMcpGatewayService.ts#L0-L0).

## Overview

```ts
class PlatformMcpGatewayService implements OnDestroy {
    protected pools: Map<PlatformMcpUpstreamSettings, Map<string, PoolEntry>>;
    getConnection(upstream: PlatformMcpUpstreamSettings, resolved?: PlatformMcpUpstreamSettings): Promise<PlatformMcpUpstreamConnection>;
    $onDestroy(): Promise<void>;
    protected connect(upstream: PlatformMcpUpstreamSettings, entry: PoolEntry): Promise<PlatformMcpUpstreamConnection>;
    protected loadCatalog(client: Client): Promise<PlatformMcpUpstreamCatalog>;
    protected getPool(upstream: PlatformMcpUpstreamSettings): Map<string, PoolEntry>;
    protected getKey(upstream: PlatformMcpUpstreamSettings): string;
    protected evict(upstream: PlatformMcpUpstreamSettings, pool: Map<string, PoolEntry>, current: PoolEntry, now: number): void;
    protected close(entry: PoolEntry): Promise<void>;
}
```

## Description

Owns the MCP clients connected to the upstream servers declared on the MCP endpoints.

One connection is kept per upstream and per distinct set of interpolated values, so upstreams with
caller-independent credentials share a single connection while forwarded identities get their own.

## protected pools

```ts
protected pools: Map<PlatformMcpUpstreamSettings, Map<string, PoolEntry>>;
```

## getConnection

```ts
getConnection(upstream: PlatformMcpUpstreamSettings, resolved?: PlatformMcpUpstreamSettings): Promise<PlatformMcpUpstreamConnection>;
```

* **upstream** (`PlatformMcpUpstreamSettings`): Upstream declared in the configuration, identifying the pool.

* **resolved** (`PlatformMcpUpstreamSettings`): Optional. Same definition with its placeholders interpolated for the caller.

Returns the connection matching the resolved upstream definition, connecting lazily.

## $onDestroy

```ts
$onDestroy(): Promise<void>;
```

## protected connect

```ts
protected connect(upstream: PlatformMcpUpstreamSettings, entry: PoolEntry): Promise<PlatformMcpUpstreamConnection>;
```

## protected loadCatalog

```ts
protected loadCatalog(client: Client): Promise<PlatformMcpUpstreamCatalog>;
```

## protected getPool

```ts
protected getPool(upstream: PlatformMcpUpstreamSettings): Map<string, PoolEntry>;
```

## protected getKey

```ts
protected getKey(upstream: PlatformMcpUpstreamSettings): string;
```

## protected evict

```ts
protected evict(upstream: PlatformMcpUpstreamSettings, pool: Map<string, PoolEntry>, current: PoolEntry, now: number): void;
```

Closes idle connections, then the least recently used ones while the pool is full.
Connections serving a request and the requested one are kept, so the pool can temporarily exceed `max`.

## protected close

```ts
protected close(entry: PoolEntry): Promise<void>;
```
