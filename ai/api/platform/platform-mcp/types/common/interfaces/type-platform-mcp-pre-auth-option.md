---
title: PlatformMcpPreAuthOption from @tsed/platform-mcp
description: api documentation of PlatformMcpPreAuthOption from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformMcpPreAuthOption type
---
# PlatformMcpPreAuthOption - @tsed/platform-mcp

## Usage

```typescript
import { PlatformMcpPreAuthOption } from "@tsed/platform/platform-mcp/src/common/interfaces/PlatformMcpPreAuth";
```

> See [/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpPreAuth.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpPreAuth.ts#L0-L0).

## Overview

```ts
type PlatformMcpPreAuthOption = (($ctx: PlatformContext) => PlatformMcpPreAuthResult) | TokenProvider<PlatformMcpPreAuth>;
```

<!-- Description -->

## Description

Accepted forms of the `auth.preAuth` option: a function, or a DI token resolving to a
{@link PlatformMcpPreAuth} provider.
