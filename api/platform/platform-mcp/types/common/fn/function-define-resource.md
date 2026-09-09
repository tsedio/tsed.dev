---
url: /api/platform/platform-mcp/types/common/fn/function-define-resource.md
description: api documentation of defineResource from @tsed/platform-mcp
---

## Usage

```typescript
import { defineResource } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/fn/defineResource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/fn/defineResource.ts#L0-L0).

## Overview

```ts
function defineResource(options: FnResourceReadProps): TokenProvider;
export function defineResource(options: FnResourceTemplateProps): TokenProvider;
export function defineResource(options: ClassResourceReadProps): TokenProvider;
export function defineResource(options: ClassResourceTemplateProps): TokenProvider;
```

* **options** (`FnResourceReadProps`): Resource metadata describing either a static URI or a template builder.

## Description

Registers an MCP resource provider with the Ts.ED injector and returns its token.

### Usage

```ts
defineResource({
  name: "docs",
  uri: "file:///var/data/docs",
  handler: async () => ({contents: [{uri: "file:///var/data/docs/readme.md"}]})
});
```
