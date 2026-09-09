---
title: OnInstall from @tsed/passport
description: api documentation of OnInstall from @tsed/passport
meta:
 - name: keywords
   description: api typescript node.js documentation OnInstall interface
---
# OnInstall - @tsed/passport

## Usage

```typescript
import { OnInstall } from "@tsed/passport";
```

> See [/packages/security/passport/src/interfaces/OnInstall.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/passport/src/interfaces/OnInstall.ts#L0-L0).

## Overview

```ts
interface OnInstall {
    $onInstall(strategy: Strategy): void | Promise<void>;
}
```

<!-- Members -->

## $onInstall

```ts
$onInstall(strategy: Strategy): void | Promise<void>;
```
