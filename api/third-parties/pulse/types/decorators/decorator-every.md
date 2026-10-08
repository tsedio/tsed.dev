---
url: /api/third-parties/pulse/types/decorators/decorator-every.md
description: api documentation of Every from @tsed/pulse
---

## Usage

```typescript
import { Every } from "@tsed/pulse";
```

> See [/packages/third-parties/pulse/src/decorators/every.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/third-parties/pulse/src/decorators/every.ts#L0-L0).

## Overview

```ts
function Every(interval: string, options?: EveryOptions): MethodDecorator;
```

## Description

Schedule the decorated method as a recurring Pulse job.

Use `Every` from `@tsed/agenda` instead.
