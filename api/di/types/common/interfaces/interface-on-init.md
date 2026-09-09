---
url: /api/di/types/common/interfaces/interface-on-init.md
description: api documentation of OnInit from @tsed/di
---

## Usage

```typescript
import { OnInit } from "@tsed/di";
```

> See [/packages/di/src/common/interfaces/OnInit.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/OnInit.ts#L0-L0).

## Overview

```ts
interface OnInit {
    $onInit(): Promise<any> | void;
}
```

## Description

Lifecycle hook interface for initialization logic.

Implement this interface to execute custom initialization code when a provider instance is created by the DI container.
The `$onInit` method is called automatically after the instance is constructed and dependencies are injected.

### Usage

```typescript
import {Injectable, OnInit} from "@tsed/di";

@Injectable()
class MyService implements OnInit {
  async $onInit() {
    // Initialize database connection, load configuration, etc.
    await this.connect();
  }
}
```

## $onInit

```ts
$onInit(): Promise<any> | void;
```
