---
title: OnDestroy from @tsed/di
description: api documentation of OnDestroy from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation OnDestroy interface
---
# OnDestroy - @tsed/di

## Usage

```typescript
import { OnDestroy } from "@tsed/di";
```

> See [/packages/di/src/common/interfaces/OnDestroy.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/OnDestroy.ts#L0-L0).

## Overview

```ts
interface OnDestroy {
    $onDestroy(): Promise<any> | void;
}
```

<!-- Description -->

## Description

Lifecycle hook interface for cleanup logic.

Implement this interface to execute custom cleanup code when a provider instance is destroyed by the DI container.
The `$onDestroy` method is called automatically during application shutdown or when the provider scope ends.

### Usage

```typescript
import {Injectable, OnDestroy} from "@tsed/di";

@Injectable()
class MyService implements OnDestroy {
  async $onDestroy() {
    // Close connections, release resources, etc.
    await this.disconnect();
  }
}
```

<!-- Members -->

## $onDestroy

```ts
$onDestroy(): Promise<any> | void;
```
