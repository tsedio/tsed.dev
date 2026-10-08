---
title: PulseSettings from @tsed/pulse
description: api documentation of PulseSettings from @tsed/pulse
meta:
 - name: keywords
   description: api typescript node.js documentation PulseSettings type
---
# PulseSettings - @tsed/pulse

## Usage

```typescript
import { PulseSettings } from "@tsed/third-parties/pulse/src/interfaces/interfaces";
```

> See [/packages/third-parties/pulse/src/interfaces/interfaces.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/third-parties/pulse/src/interfaces/interfaces.ts#L0-L0).

## Overview

```ts
type PulseSettings = PulseConfig & {
    enabled?: boolean;
    disableJobProcessing?: boolean;
    drainJobsBeforeClose?: boolean;
};
```

<!-- Description -->

## Description

Use `AgendaSettings` from `@tsed/agenda` with `agenda.backend: new MongoBackend(...)` instead.

<!-- Members -->

## enabled

```ts
enabled?: boolean;
```

## disableJobProcessing

```ts
disableJobProcessing?: boolean;
```

## drainJobsBeforeClose

```ts
drainJobsBeforeClose?: boolean;
```
