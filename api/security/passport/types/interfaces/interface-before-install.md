---
url: /api/security/passport/types/interfaces/interface-before-install.md
description: api documentation of BeforeInstall from @tsed/passport
---

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

## $beforeInstall

```ts
$beforeInstall(setting: Settings): Promise<Settings> | Settings | void;
```
