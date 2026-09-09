---
url: >-
  /api/platform/platform-mcp/types/common/decorators/type-resource-decorator-options.md
description: api documentation of ResourceDecoratorOptions from @tsed/platform-mcp
---

## Usage

```typescript
import { ResourceDecoratorOptions } from "@tsed/platform/platform-mcp/src/common/decorators/resource";
```

> See [/packages/platform/platform-mcp/src/common/decorators/resource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/decorators/resource.ts#L0-L0).

## Overview

```ts
type ResourceDecoratorOptions = Omit<ClassResourceReadProps, "token" | "propertyKey" | "uri">;
```

## Description

Options accepted by the {@link Resource} decorator beyond the handler binding fields, allowing callers to override metadata.
