---
url: >-
  /api/platform/platform-mcp/types/common/services/class-platform-mcp-gateway-service.md
description: api documentation of PlatformMcpGatewayService from @tsed/platform-mcp
---

## Usage

```typescript
import { PlatformMcpGatewayService } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/services/PlatformMcpGatewayService.ts](https://github.com/tsedio/tsed/blob/v8.45.2/packages/platform/platform-mcp/src/common/services/PlatformMcpGatewayService.ts#L0-L0).

## Overview

```ts
class PlatformMcpGatewayService implements OnDestroy {
    protected pools: Map<PlatformMcpUpstreamSettings, Map<string, PoolEntry>>;
    protected clients: WeakMap<Client, ClientState>;
    getConnection(upstream: PlatformMcpUpstreamSettings, resolved?: PlatformMcpUpstreamSettings): Promise<PlatformMcpUpstreamConnection>;
    reconnect(upstream: PlatformMcpUpstreamSettings, resolved: PlatformMcpUpstreamSettings, stale: Pick<PlatformMcpUpstreamConnection, "client">): Promise<PlatformMcpUpstreamConnection>;
    $onDestroy(): Promise<void>;
    protected acquire(upstream: PlatformMcpUpstreamSettings, resolved: PlatformMcpUpstreamSettings): {
        entry: PoolEntry;
        connection: Promise<PlatformMcpUpstreamConnection>;
    };
    protected connect(upstream: PlatformMcpUpstreamSettings, resolved: PlatformMcpUpstreamSettings, entry: PoolEntry): Promise<PlatformMcpUpstreamConnection>;
    protected run<T>(upstream: PlatformMcpUpstreamSettings, resolved: PlatformMcpUpstreamSettings, entry: PoolEntry, client: Client, fn: (client: Client) => Promise<T>, replay?: boolean): Promise<T>;
    protected loadCatalog(client: Client, label: string): Promise<{
        catalog: PlatformMcpUpstreamCatalog;
        complete: boolean;
    }>;
    protected getLabel(upstream: PlatformMcpUpstreamSettings): string;
    protected getPool(upstream: PlatformMcpUpstreamSettings): Map<string, PoolEntry>;
    protected getKey(upstream: PlatformMcpUpstreamSettings): string;
    protected evict(upstream: PlatformMcpUpstreamSettings, pool: Map<string, PoolEntry>, current: PoolEntry, now: number): void;
    protected track<T>(client: Client, fn: () => Promise<T>): Promise<T>;
    protected retire(client: Client): Promise<void>;
    protected getClientState(client: Client): ClientState;
    protected close(entry: PoolEntry): Promise<void>;
    protected closeClient(client: Client | undefined): Promise<void>;
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

## protected clients

```ts
protected clients: WeakMap<Client, ClientState>;
```

## getConnection

```ts
getConnection(upstream: PlatformMcpUpstreamSettings, resolved?: PlatformMcpUpstreamSettings): Promise<PlatformMcpUpstreamConnection>;
```

* **upstream** (`PlatformMcpUpstreamSettings`): Upstream declared in the configuration, identifying the pool.

* **resolved** (`PlatformMcpUpstreamSettings`): Optional. Same definition with its placeholders interpolated for the caller.

Returns the connection matching the resolved upstream definition, connecting lazily.

## reconnect

```ts
reconnect(upstream: PlatformMcpUpstreamSettings, resolved: PlatformMcpUpstreamSettings, stale: Pick<PlatformMcpUpstreamConnection, "client">): Promise<PlatformMcpUpstreamConnection>;
```

* **upstream** (`PlatformMcpUpstreamSettings`): Upstream declared in the configuration, identifying the pool.

* **resolved** (`PlatformMcpUpstreamSettings`): Same definition with its placeholders interpolated for the caller.

* **stale** (`Pick<PlatformMcpUpstreamConnection`): Connection whose session was lost.

Replaces a connection whose session the upstream lost, then returns the connection to use.

The connection is replaced only while it is still the current one: the requests failing together share the
connection opened by the first of them. Its client is closed once its running requests are done: closing it
earlier would abort requests the upstream may have handled, which could then not be replayed safely.

## $onDestroy

```ts
$onDestroy(): Promise<void>;
```

## protected acquire

```ts
protected acquire(upstream: PlatformMcpUpstreamSettings, resolved: PlatformMcpUpstreamSettings): {
     entry: PoolEntry;
     connection: Promise<PlatformMcpUpstreamConnection>;
 };
```

Returns the pool entry matching the resolved upstream definition and its connection, connecting lazily.

## protected connect

```ts
protected connect(upstream: PlatformMcpUpstreamSettings, resolved: PlatformMcpUpstreamSettings, entry: PoolEntry): Promise<PlatformMcpUpstreamConnection>;
```

## protected run

```ts
protected run<T>(upstream: PlatformMcpUpstreamSettings, resolved: PlatformMcpUpstreamSettings, entry: PoolEntry, client: Client, fn: (client: Client) => Promise<T>, replay?: boolean): Promise<T>;
```

Runs `fn` with the current client of the entry, and replays it once on a new connection when the upstream
lost the session.

## protected loadCatalog

```ts
protected loadCatalog(client: Client, label: string): Promise<{
     catalog: PlatformMcpUpstreamCatalog;
     complete: boolean;
 }>;
```

Lists every catalog the upstream advertises.

A listing that fails is logged and left empty so the others stay available: an upstream may advertise
a capability it cannot serve (e.g. prompts without any prompt configured). The catalog is then flagged
incomplete so the next request lists it again. It rejects only when every advertised listing fails.

## protected getLabel

```ts
protected getLabel(upstream: PlatformMcpUpstreamSettings): string;
```

Names the upstream in the logs without the credentials its URL may carry (userinfo, query, hash).

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

## protected track

```ts
protected track<T>(client: Client, fn: () => Promise<T>): Promise<T>;
```

Counts the requests running on the client, and closes it after the last one when it was replaced.

## protected retire

```ts
protected retire(client: Client): Promise<void>;
```

Closes a replaced client once its running requests are done.

## protected getClientState

```ts
protected getClientState(client: Client): ClientState;
```

Returns the requests running on the client and whether it was replaced.

## protected close

```ts
protected close(entry: PoolEntry): Promise<void>;
```

Removes the connection of the entry and closes its client right away (eviction, destroy).

## protected closeClient

```ts
protected closeClient(client: Client | undefined): Promise<void>;
```

Closes the client, logging a failure instead of throwing it.
