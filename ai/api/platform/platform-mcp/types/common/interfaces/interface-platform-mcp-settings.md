---
title: PlatformMcpSettings from @tsed/platform-mcp
description: api documentation of PlatformMcpSettings from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformMcpSettings interface
---
# PlatformMcpSettings - @tsed/platform-mcp

## Usage

```typescript
import { PlatformMcpSettings } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpSettings.ts#L0-L0).

## Overview

```ts
interface PlatformMcpSettings {
    path?: string;
    enabled?: boolean;
    name?: string;
    version?: string;
    title?: Implementation["title"];
    description?: Implementation["description"];
    websiteUrl?: Implementation["websiteUrl"];
    icons?: Implementation["icons"];
    tools?: TokenProvider[];
    resources?: TokenProvider[];
    prompts?: TokenProvider[];
    serverOptions?: ServerOptions;
    transportOptions?: StreamableHTTPServerTransportOptions;
}
```

<!-- Description -->

## Description

Configuration fragment accepted under `configuration.mcp` to wire the Platform MCP module.

<!-- Members -->

## path

```ts
path?: string;
```

Mount path for the MCP endpoint. Defaults to `/mcp`.

## enabled

```ts
enabled?: boolean;
```

Whether the HTTP endpoint should be enabled. Defaults to `true`.

## name

```ts
name?: string;
```

Optional name reported to MCP clients. Falls back to the Ts.ED app name.

## version

```ts
version?: string;
```

Optional version reported to MCP clients. Falls back to the Ts.ED app version.

## title

```ts
title?: Implementation["title"];
```

Optional human-readable server title exposed to MCP clients.

## description

```ts
description?: Implementation["description"];
```

Optional server description exposed to MCP clients.

## websiteUrl

```ts
websiteUrl?: Implementation["websiteUrl"];
```

Optional canonical website URL exposed to MCP clients.

## icons

```ts
icons?: Implementation["icons"];
```

Optional icon descriptors exposed to MCP clients.

## tools

```ts
tools?: TokenProvider[];
```

Optional tokens registered through configuration.

## resources

```ts
resources?: TokenProvider[];
```

## prompts

```ts
prompts?: TokenProvider[];
```

## serverOptions

```ts
serverOptions?: ServerOptions;
```

Optional low-level MCP server options forwarded to `new McpServer(serverInfo, options)`.

## transportOptions

```ts
transportOptions?: StreamableHTTPServerTransportOptions;
```

Optional transport options for the MCP server.
