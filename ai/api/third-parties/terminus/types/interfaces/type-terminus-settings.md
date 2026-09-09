---
title: TerminusSettings from @tsed/terminus
description: api documentation of TerminusSettings from @tsed/terminus
meta:
 - name: keywords
   description: api typescript node.js documentation TerminusSettings type
---
# TerminusSettings - @tsed/terminus

## Usage

```typescript
import { TerminusSettings } from "@tsed/third-parties/terminus/src/interfaces/TerminusSettings";
```

> See [/packages/third-parties/terminus/src/interfaces/TerminusSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/terminus/src/interfaces/TerminusSettings.ts#L0-L0).

## Overview

```ts
type TerminusSettings = Omit<TerminusOptions, "healthChecks" | "onSignal" | "onSendFailureDuringShutdown" | "onShutdown" | "beforeShutdown" | "onSigterm"> & {
    path?: string;
};
```

<!-- Members -->

## path

```ts
path?: string;
```
