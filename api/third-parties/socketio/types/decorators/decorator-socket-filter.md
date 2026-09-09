---
url: /api/third-parties/socketio/types/decorators/decorator-socket-filter.md
description: api documentation of SocketFilter from @tsed/socketio
---

## Usage

```typescript
import { SocketFilter } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/socketFilter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/socketFilter.ts#L0-L0).

## Overview

```ts
function SocketFilter(filter: SocketFilters, mapIndex?: number): (target: Object, propertyKey: string, index: number) => void;
```
