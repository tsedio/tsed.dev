---
url: /api/orm/mikro-orm/types/interfaces/interface-after-transaction-commit.md
description: api documentation of AfterTransactionCommit from @tsed/mikro-orm
---

## Usage

```typescript
import { AfterTransactionCommit } from "@tsed/mikro-orm";
```

> See [/packages/orm/mikro-orm/src/interfaces/AfterTransactionCommit.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mikro-orm/src/interfaces/AfterTransactionCommit.ts#L0-L0).

## Overview

```ts
interface AfterTransactionCommit {
    $afterTransactionCommit(em: EntityManager): Promise<unknown> | unknown;
}
```

## $afterTransactionCommit

```ts
$afterTransactionCommit(em: EntityManager): Promise<unknown> | unknown;
```
