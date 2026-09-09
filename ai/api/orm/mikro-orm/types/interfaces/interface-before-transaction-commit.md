---
title: BeforeTransactionCommit from @tsed/mikro-orm
description: api documentation of BeforeTransactionCommit from @tsed/mikro-orm
meta:
 - name: keywords
   description: api typescript node.js documentation BeforeTransactionCommit interface
---
# BeforeTransactionCommit - @tsed/mikro-orm

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

<!-- Members -->

## $beforeTransactionCommit

```ts
$beforeTransactionCommit(em: EntityManager): Promise<unknown> | unknown;
```
