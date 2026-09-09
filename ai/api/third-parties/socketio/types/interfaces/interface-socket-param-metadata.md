---
title: SocketParamMetadata from @tsed/socketio
description: api documentation of SocketParamMetadata from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation SocketParamMetadata interface
---
# SocketParamMetadata - @tsed/socketio

## Usage

```typescript
import { SocketParamMetadata } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/interfaces/SocketParamMetadata.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/interfaces/SocketParamMetadata.ts#L0-L0).

## Overview

```ts
interface SocketParamMetadata extends Partial<MetadataTypes> {
    filter: SocketFilters;
    mapIndex?: number;
    useMapper?: boolean;
}
```

<!-- Members -->

## filter

```ts
filter: SocketFilters;
```

## mapIndex

```ts
mapIndex?: number;
```

## useMapper

```ts
useMapper?: boolean;
```
