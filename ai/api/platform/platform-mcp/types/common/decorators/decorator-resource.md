---
title: Resource from @tsed/platform-mcp
description: api documentation of Resource from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation Resource decorator
---
# Resource - @tsed/platform-mcp

## Usage

```typescript
import { Resource } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/decorators/resource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/decorators/resource.ts#L0-L0).

## Overview

```ts
function Resource(uriOrTemplate: string | ResourceTemplate, options?: Partial<ResourceDecoratorOptions>): (target: any, propertyKey: string | symbol, _: PropertyDescriptor) => void;
```

-   **uriOrTemplate** (`string` | `ResourceTemplate`): Direct URI string or a template describing the resource discovery metadata.

-   **options** (`Partial<ResourceDecoratorOptions>`): Optional. overrides for metadata such as name, description, or visibility.

<!-- Description -->

## Description

Decorator that turns a class method into an MCP resource backed by either a URI or a full {@link ResourceTemplate}.

### Usage

```ts
class FileCatalog {
  @Resource("file:///var/data/catalog")
  async readCatalog() {
    return {contents: [{uri: "file:///var/data/catalog/index.json"}]};
  }
}
```
