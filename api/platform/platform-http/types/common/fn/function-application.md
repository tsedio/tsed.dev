---
url: /api/platform/platform-http/types/common/fn/function-application.md
description: api documentation of application from @tsed/platform-http
---

## Usage

```typescript
import { application } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/fn/application.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/fn/application.ts#L0-L0).

## Overview

```ts
function application<App = TsED.Application>(): PlatformApplication<App>;
```

## Description

Return the injectable Application instance.
