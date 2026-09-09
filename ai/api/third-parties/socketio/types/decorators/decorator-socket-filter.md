---
title: SocketFilter from @tsed/socketio
description: api documentation of SocketFilter from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation SocketFilter decorator
---
# SocketFilter - @tsed/socketio

## Usage

```typescript
import { SocketFilter } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/socketFilter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/socketFilter.ts#L0-L0).

## Overview

```ts
function SocketFilter(filter: SocketFilters, mapIndex?: number): (target: Object, propertyKey: string, index: number) => void;
```
