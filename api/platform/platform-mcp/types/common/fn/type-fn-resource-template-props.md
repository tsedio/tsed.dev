---
url: /api/platform/platform-mcp/types/common/fn/type-fn-resource-template-props.md
description: api documentation of FnResourceTemplateProps from @tsed/platform-mcp
---

## Usage

```typescript
import { FnResourceTemplateProps } from "@tsed/platform/platform-mcp/src/common/fn/defineResource";
```

> See [/packages/platform/platform-mcp/src/common/fn/defineResource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/fn/defineResource.ts#L0-L0).

## Overview

```ts
type FnResourceTemplateProps = ResourceMetadataProps & {
    template: ResourceTemplate;
    handler: ResourceCallback;
};
```

## template

```ts
template: ResourceTemplate;
```

## handler

```ts
handler: ResourceCallback;
```
