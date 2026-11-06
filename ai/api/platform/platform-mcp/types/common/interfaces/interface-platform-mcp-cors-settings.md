---
title: PlatformMcpCorsSettings from @tsed/platform-mcp
description: api documentation of PlatformMcpCorsSettings from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformMcpCorsSettings interface
---
# PlatformMcpCorsSettings - @tsed/platform-mcp

## Usage

```typescript
import { PlatformMcpCorsSettings } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpSettings.ts](https://github.com/tsedio/tsed/blob/v8.45.2/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpSettings.ts#L0-L0).

## Overview

```ts
interface PlatformMcpCorsSettings {
    origin?: "*" | string[];
    maxAge?: number;
}
```

<!-- Description -->

## Description

CORS options of an MCP endpoint.

<!-- Members -->

## origin

```ts
origin?: "*" | string[];
```

Origins allowed to call the endpoint: `"*"` (default) or a list of origins, echoed back when the request
comes from one of them.

## maxAge

```ts
maxAge?: number;
```

Seconds a browser may cache the preflight response. Defaults to `600`.
