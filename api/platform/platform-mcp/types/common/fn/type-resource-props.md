---
url: /api/platform/platform-mcp/types/common/fn/type-resource-props.md
description: api documentation of ResourceProps from @tsed/platform-mcp
---

## Usage

```typescript
import { ResourceProps } from "@tsed/platform/platform-mcp/src/common/fn/defineResource";
```

> See [/packages/platform/platform-mcp/src/common/fn/defineResource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/fn/defineResource.ts#L0-L0).

## Overview

```ts
type ResourceProps = FnResourceReadProps | FnResourceTemplateProps | ClassResourceReadProps | ClassResourceTemplateProps;
```

## Description

Configuration accepted by {@link defineResource}, supporting either URI-based or template-based resources.
