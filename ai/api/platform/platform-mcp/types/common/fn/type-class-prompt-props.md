---
title: ClassPromptProps from @tsed/platform-mcp
description: api documentation of ClassPromptProps from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation ClassPromptProps type
---
# ClassPromptProps - @tsed/platform-mcp

## Usage

```typescript
import { ClassPromptProps } from "@tsed/platform/platform-mcp/src/common/fn/definePrompt";
```

> See [/packages/platform/platform-mcp/src/common/fn/definePrompt.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-mcp/src/common/fn/definePrompt.ts#L0-L0).

## Overview

```ts
type ClassPromptProps<Args = any> = Omit<BasePromptProps<Args>, "name"> & {
    name?: string;
    token: Type | AbstractType<any>;
    propertyKey: string | symbol;
};
```

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
