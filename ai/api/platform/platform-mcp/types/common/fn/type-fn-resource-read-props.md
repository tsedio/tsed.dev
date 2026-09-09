---
title: FnResourceReadProps from @tsed/platform-mcp
description: api documentation of FnResourceReadProps from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation FnResourceReadProps type
---
# FnResourceReadProps - @tsed/platform-mcp

## Usage

```typescript
import { FnResourceReadProps } from "@tsed/platform/platform-mcp/src/common/fn/defineResource";
```

> See [/packages/platform/platform-mcp/src/common/fn/defineResource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/fn/defineResource.ts#L0-L0).

## Overview

```ts
type FnResourceReadProps = ResourceMetadataProps & {
    uri: string;
    handler: ResourceCallback;
};
```

<!-- Members -->

## uri

```ts
uri: string;
```

## handler

```ts
handler: ResourceCallback;
```
