---
title: McpHttpUpstreamSettings from @tsed/platform-mcp
description: api documentation of McpHttpUpstreamSettings from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation McpHttpUpstreamSettings interface
---
# McpHttpUpstreamSettings - @tsed/platform-mcp

## Usage

```typescript
import { McpHttpUpstreamSettings } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpUpstreamSettings.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpUpstreamSettings.ts#L0-L0).

## Overview

```ts
interface McpHttpUpstreamSettings extends McpUpstreamBaseSettings {
    type: "http" | "sse";
    url: string;
    headers?: Record<string, string>;
    requestInit?: RequestInit;
}
```

<!-- Description -->

## Description

Upstream reached over Streamable HTTP (`http`) or legacy HTTP+SSE (`sse`).

<!-- Members -->

## type

```ts
type: "http" | "sse";
```

## url

```ts
url: string;
```

## headers

```ts
headers?: Record<string, string>;
```

Headers sent with every upstream request. Values support the `${OAUTH_TOKEN}`, `${OAUTH_CLIENT_ID}`
and `${OAUTH_SCOPES}` placeholders, replaced with the verified identity of the caller.

## requestInit

```ts
requestInit?: RequestInit;
```

Extra `fetch` options sent with every upstream request.
