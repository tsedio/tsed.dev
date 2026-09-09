---
url: /api/platform/platform-mcp/types/common/fn/type-class-prompt-props.md
description: api documentation of ClassPromptProps from @tsed/platform-mcp
---

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
