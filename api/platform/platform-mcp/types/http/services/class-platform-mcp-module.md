---
url: /api/platform/platform-mcp/types/http/services/class-platform-mcp-module.md
description: api documentation of PlatformMcpModule from @tsed/platform-mcp
---

## Usage

```typescript
import { PlatformMcpModule } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/http/services/PlatformMcpModule.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/http/services/PlatformMcpModule.ts#L0-L0).

## Overview

```ts
class PlatformMcpModule implements OnRoutesInit {
    protected settings: PlatformMcpSettings;
    protected app: import("@tsed/platform-http").PlatformApplication<TsED.Application>;
    protected server: McpServer;
    $onRoutesInit(): void;
    $logRoutes(routes: PlatformRouteDetails[]): (false | PlatformRouteDetails | {
        method: string;
        name: string;
        url: string;
    })[];
    protected dispatch($ctx: PlatformContext): Promise<void>;
}
```

## Description

Platform module that mounts the MCP HTTP endpoint and forwards requests to the configured server instance.

## protected settings

```ts
protected settings: PlatformMcpSettings;
```

## protected app: import

```ts
protected app: import("@tsed/platform-http").PlatformApplication<TsED.Application>;
```

## protected server

```ts
protected server: McpServer;
```

## $onRoutesInit

```ts
$onRoutesInit(): void;
```

## $logRoutes

```ts
$logRoutes(routes: PlatformRouteDetails[]): (false | PlatformRouteDetails | {
     method: string;
     name: string;
     url: string;
 })[];
```

## protected dispatch

```ts
protected dispatch($ctx: PlatformContext): Promise<void>;
```
