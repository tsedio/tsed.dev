---
url: /api/orm/mikro-orm/types/interfaces/interface-before-transaction-commit.md
description: api documentation of BeforeTransactionCommit from @tsed/mikro-orm
---

## Usage

```typescript
import { BeforeTransactionCommit } from "@tsed/mikro-orm";
```

> See [/packages/orm/mikro-orm/src/interfaces/BeforeTransactionCommit.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mikro-orm/src/interfaces/BeforeTransactionCommit.ts#L0-L0).

## Overview

```ts
interface BeforeTransactionCommit {
    $beforeTransactionCommit(em: EntityManager): Promise<unknown> | unknown;
}
```

## $beforeTransactionCommit

```ts
$beforeTransactionCommit(em: EntityManager): Promise<unknown> | unknown;
```
