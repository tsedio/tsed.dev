---
url: /api/platform/platform-mcp/types/http/services/class-platform-mcp-module.md
description: api documentation of PlatformMcpModule from @tsed/platform-mcp
---

## Usage

```typescript
import { PlatformMcpModule } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/http/services/PlatformMcpModule.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/platform/platform-mcp/src/http/services/PlatformMcpModule.ts#L0-L0).

## Overview

```ts
class PlatformMcpModule implements OnRoutesInit {
    protected settings: PlatformMcpSettings | PlatformMcpSettings[];
    protected app: import("@tsed/platform-http").PlatformApplication<TsED.Application>;
    protected mcps: PlatformRouteDetails[];
    protected platformAuthService: PlatformMcpAuthService;
    $onRoutesInit(): void;
    $logRoutes(routes: PlatformRouteDetails[]): PlatformRouteDetails[];
    protected validate(path: string, opts: PlatformMcpSettings): void;
    protected methodNotAllowed($ctx: PlatformContext): import("@tsed/platform-http").PlatformResponse<any>;
    protected metadata(settings: CreateMcpServerOpts, $ctx: PlatformContext): import("@tsed/platform-http").PlatformResponse<any>;
    protected dispatch(settings: CreateMcpServerOpts, $ctx: PlatformContext): Promise<import("@tsed/platform-http").PlatformResponse<any> | undefined>;
}
```

## Description

Platform module that mounts the MCP HTTP endpoint and forwards requests to the configured server instance.

## protected settings

```ts
protected settings: PlatformMcpSettings | PlatformMcpSettings[];
```

## protected app: import

```ts
protected app: import("@tsed/platform-http").PlatformApplication<TsED.Application>;
```

## protected mcps

```ts
protected mcps: PlatformRouteDetails[];
```

## protected platformAuthService

```ts
protected platformAuthService: PlatformMcpAuthService;
```

## $onRoutesInit

```ts
$onRoutesInit(): void;
```

## $logRoutes

```ts
$logRoutes(routes: PlatformRouteDetails[]): PlatformRouteDetails[];
```

## protected validate

```ts
protected validate(path: string, opts: PlatformMcpSettings): void;
```

Rejects a configuration that cannot work or would be unsafe, before any route is mounted.

## protected methodNotAllowed

```ts
protected methodNotAllowed($ctx: PlatformContext): import("@tsed/platform-http").PlatformResponse<any>;
```

Answers the methods of the Streamable HTTP transport that a stateless endpoint does not serve,
so MCP clients know there is no event stream instead of receiving the application's 404 page.

## protected metadata

```ts
protected metadata(settings: CreateMcpServerOpts, $ctx: PlatformContext): import("@tsed/platform-http").PlatformResponse<any>;
```

## protected dispatch

```ts
protected dispatch(settings: CreateMcpServerOpts, $ctx: PlatformContext): Promise<import("@tsed/platform-http").PlatformResponse<any> | undefined>;
```
