---
title: PlatformMcpModule from @tsed/platform-mcp
description: api documentation of PlatformMcpModule from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformMcpModule class
---
# PlatformMcpModule - @tsed/platform-mcp

## Usage

```typescript
import { PlatformMcpModule } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/http/services/PlatformMcpModule.ts](https://github.com/tsedio/tsed/blob/v8.40.2/packages/platform/platform-mcp/src/http/services/PlatformMcpModule.ts#L0-L0).

## Overview

```ts
class PlatformMcpModule implements OnRoutesInit {
    protected settings: PlatformMcpSettings | PlatformMcpSettings[];
    protected app: import("@tsed/platform-http").PlatformApplication<TsED.Application>;
    protected mcps: PlatformRouteDetails[];
    $onRoutesInit(): void;
    $logRoutes(routes: PlatformRouteDetails[]): PlatformRouteDetails[];
    protected dispatch(settings: CreateMcpServerOpts, $ctx: PlatformContext): Promise<void>;
}
```

<!-- Description -->

## Description

Platform module that mounts the MCP HTTP endpoint and forwards requests to the configured server instance.

<!-- Members -->

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

## $onRoutesInit

```ts
$onRoutesInit(): void;
```

## $logRoutes

```ts
$logRoutes(routes: PlatformRouteDetails[]): PlatformRouteDetails[];
```

## protected dispatch

```ts
protected dispatch(settings: CreateMcpServerOpts, $ctx: PlatformContext): Promise<void>;
```
