---
url: /api/platform/platform-mcp/types/common/fn/type-fn-resource-read-props.md
description: api documentation of FnResourceReadProps from @tsed/platform-mcp
---

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

## uri

```ts
uri: string;
```

## handler

```ts
handler: ResourceCallback;
```
