---
url: >-
  /api/platform/platform-http/types/common/decorators/decorator-platform-provider.md
description: api documentation of PlatformProvider from @tsed/platform-http
---

## Usage

```typescript
import { PlatformProvider } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/decorators/PlatformProvider.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/decorators/PlatformProvider.ts#L0-L0).

## Overview

```ts
function PlatformProvider(): (klass: Type<PlatformAdapter>) => void;
```

## Description

Register a new platform adapter.
