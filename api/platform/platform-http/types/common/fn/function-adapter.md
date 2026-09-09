---
url: /api/platform/platform-http/types/common/fn/function-adapter.md
description: api documentation of adapter from @tsed/platform-http
---

## Usage

```typescript
import { adapter } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/fn/adapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/fn/adapter.ts#L0-L0).

## Overview

```ts
function adapter(adapter: Type<PlatformAdapter<any>>, imports?: ProviderOpts[]): Type<PlatformAdapter<any>>;

export function adapter(): Type<PlatformAdapter<any>>;
```

## Description

Set the platform adapter token and his dependencies
