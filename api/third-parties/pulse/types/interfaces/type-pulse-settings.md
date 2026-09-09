---
url: /api/third-parties/pulse/types/interfaces/type-pulse-settings.md
description: api documentation of PulseSettings from @tsed/pulse
---

## Usage

```typescript
import { PulseSettings } from "@tsed/third-parties/pulse/src/interfaces/interfaces";
```

> See [/packages/third-parties/pulse/src/interfaces/interfaces.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/pulse/src/interfaces/interfaces.ts#L0-L0).

## Overview

```ts
type PulseSettings = PulseConfig & {
    enabled?: boolean;
    disableJobProcessing?: boolean;
    drainJobsBeforeClose?: boolean;
};
```

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
