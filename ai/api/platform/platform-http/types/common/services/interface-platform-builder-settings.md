---
title: PlatformBuilderSettings from @tsed/platform-http
description: api documentation of PlatformBuilderSettings from @tsed/platform-http
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformBuilderSettings interface
---
# PlatformBuilderSettings - @tsed/platform-http

## Usage

```typescript
import { PlatformBuilderSettings } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/services/PlatformAdapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/services/PlatformAdapter.ts#L0-L0).

## Overview

```ts
interface PlatformBuilderSettings<App = TsED.Application> extends Partial<TsED.Configuration> {
    adapter?: Type<PlatformAdapter<App>>;
}
```

<!-- Members -->

## adapter

```ts
adapter?: Type<PlatformAdapter<App>>;
```
