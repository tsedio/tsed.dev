---
url: /api/security/passport/types/interfaces/interface-on-verify.md
description: api documentation of OnVerify from @tsed/passport
---

## Usage

```typescript
import { OnVerify } from "@tsed/passport";
```

> See [/packages/security/passport/src/interfaces/OnVerify.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/passport/src/interfaces/OnVerify.ts#L0-L0).

## Overview

```ts
interface OnVerify {
    $onVerify(...args: any[]): Promise<any | any[]> | any | any[];
}
```

## $onVerify

```ts
$onVerify(...args: any[]): Promise<any | any[]> | any | any[];
```
