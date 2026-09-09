---
title: BeforeInstall from @tsed/passport
description: api documentation of BeforeInstall from @tsed/passport
meta:
 - name: keywords
   description: api typescript node.js documentation BeforeInstall interface
---
# BeforeInstall - @tsed/passport

## Usage

```typescript
import { BeforeInstall } from "@tsed/passport";
```

> See [/packages/security/passport/src/interfaces/BeforeInstall.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/passport/src/interfaces/BeforeInstall.ts#L0-L0).

## Overview

```ts
interface BeforeInstall<Settings = any> {
    $beforeInstall(setting: Settings): Promise<Settings> | Settings | void;
}
```

<!-- Members -->

## $beforeInstall

```ts
$beforeInstall(setting: Settings): Promise<Settings> | Settings | void;
```
