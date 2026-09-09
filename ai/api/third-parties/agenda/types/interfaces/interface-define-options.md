---
title: DefineOptions from @tsed/agenda
description: api documentation of DefineOptions from @tsed/agenda
meta:
 - name: keywords
   description: api typescript node.js documentation DefineOptions interface
---
# DefineOptions - @tsed/agenda

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

<!-- Members -->

## name

```ts
name?: string;
```
