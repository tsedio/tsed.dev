---
title: ClassToolProps from @tsed/platform-mcp
description: api documentation of ClassToolProps from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation ClassToolProps type
---
# ClassToolProps - @tsed/platform-mcp

## Usage

```typescript
import { ClassToolProps } from "@tsed/platform/platform-mcp/src/common/fn/defineTool";
```

> See [/packages/platform/platform-mcp/src/common/fn/defineTool.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/fn/defineTool.ts#L0-L0).

## Overview

```ts
type ClassToolProps<Input, Output = unknown> = BaseToolProps<Input, Output> & {
    name?: string;
    token: Type | AbstractType<any>;
    propertyKey: string | symbol;
};
```

<!-- Description -->

## Description

Configuration accepted when decorating class methods as MCP tools.

<!-- Members -->

## name

```ts
name?: string;
```

## token

```ts
token: Type | AbstractType<any>;
```

## propertyKey

```ts
propertyKey: string | symbol;
```
