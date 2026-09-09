---
url: /api/third-parties/event-emitter/types/decorators/decorator-on-event.md
description: api documentation of OnEvent from @tsed/event-emitter
---

## Usage

```typescript
import { OnEvent } from "@tsed/event-emitter";
```

> See [/packages/third-parties/event-emitter/src/decorators/onEvent.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/event-emitter/src/decorators/onEvent.ts#L0-L0).

## Overview

```ts
function OnEvent(event: event | eventNS, options?: boolean | OnOptions): MethodDecorator;
```
