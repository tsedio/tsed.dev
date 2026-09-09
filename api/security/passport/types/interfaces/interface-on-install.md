---
url: /api/security/passport/types/interfaces/interface-on-install.md
description: api documentation of OnInstall from @tsed/passport
---

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

## $onInstall

```ts
$onInstall(strategy: Strategy): void | Promise<void>;
```
