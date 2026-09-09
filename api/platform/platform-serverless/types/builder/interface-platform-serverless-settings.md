---
url: >-
  /api/platform/platform-serverless/types/builder/interface-platform-serverless-settings.md
description: api documentation of PlatformServerlessSettings from @tsed/platform-serverless
---

## Usage

```typescript
import { PlatformServerlessSettings } from "@tsed/platform-serverless";
```

> See [/packages/platform/platform-serverless/src/builder/PlatformServerless.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-serverless/src/builder/PlatformServerless.ts#L0-L0).

## Overview

```ts
interface PlatformServerlessSettings extends Partial<TsED.Configuration> {
    lambda?: Type[];
}
```

## lambda

```ts
lambda?: Type[];
```
