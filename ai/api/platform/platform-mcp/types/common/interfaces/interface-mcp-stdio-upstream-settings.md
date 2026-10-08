---
title: McpStdioUpstreamSettings from @tsed/platform-mcp
description: api documentation of McpStdioUpstreamSettings from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation McpStdioUpstreamSettings interface
---
# McpStdioUpstreamSettings - @tsed/platform-mcp

## Usage

```typescript
import { McpStdioUpstreamSettings } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpUpstreamSettings.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpUpstreamSettings.ts#L0-L0).

## Overview

```ts
interface McpStdioUpstreamSettings extends McpUpstreamBaseSettings {
    type: "stdio";
    command: string;
    args?: string[];
    env?: Record<string, string>;
    cwd?: string;
}
```

<!-- Description -->

## Description

Upstream started as a local process speaking MCP over stdio (for instance a server started with `npx`).

<!-- Members -->

## type

```ts
type: "stdio";
```

## command

```ts
command: string;
```

## args

```ts
args?: string[];
```

Arguments of the command. Values support the same placeholders as `headers`.
One process is started per distinct set of interpolated values.

## env

```ts
env?: Record<string, string>;
```

Environment of the child process, merged over the SDK safe environment subset.
Values support the same placeholders as `headers`.

## cwd

```ts
cwd?: string;
```
