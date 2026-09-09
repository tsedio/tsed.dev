---
url: /api/third-parties/socketio/types/decorators/type-namespace.md
description: api documentation of Namespace from @tsed/socketio
---

## Usage

```typescript
import { Namespace } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/nsp.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/nsp.ts#L0-L0).

## Overview

```ts
type Namespace = NamespaceType;
export type Nsp = NamespaceType;

export function Nsp(target: any, propertyKey?: string, index?: number): any;

export function Namespace(target: Object, propertyKey?: string, index?: number): void | ((target: Object, propertyKey: string) => void);
```
