---
url: /api/third-parties/agenda/types/interfaces/interface-define-options.md
description: api documentation of DefineOptions from @tsed/agenda
---

## Usage

```typescript
import { DefineOptions } from "@tsed/agenda";
```

> See [/packages/third-parties/agenda/src/interfaces/AgendaStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/agenda/src/interfaces/AgendaStore.ts#L0-L0).

## Overview

```ts
interface DefineOptions extends Partial<Pick<JobDefinition, "lockLimit" | "lockLifetime" | "concurrency" | "backoff" | "removeOnComplete" | "logging" | "priority">> {
    name?: string;
}
```

## name

```ts
name?: string;
```
