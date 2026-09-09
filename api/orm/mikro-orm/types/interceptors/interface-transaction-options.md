---
url: /api/orm/mikro-orm/types/interceptors/interface-transaction-options.md
description: api documentation of TransactionOptions from @tsed/mikro-orm
---

## Usage

```typescript
import { TransactionOptions } from "@tsed/mikro-orm";
```

> See [/packages/orm/mikro-orm/src/interceptors/TransactionalInterceptor.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mikro-orm/src/interceptors/TransactionalInterceptor.ts#L0-L0).

## Overview

```ts
interface TransactionOptions {
    retry?: boolean;
    disabled?: boolean;
    isolationLevel?: IsolationLevel;
    flushMode?: FlushMode;
    contextName?: string;
}
```

## retry

```ts
retry?: boolean;
```

## disabled

```ts
disabled?: boolean;
```

## isolationLevel

```ts
isolationLevel?: IsolationLevel;
```

## flushMode

```ts
flushMode?: FlushMode;
```

## contextName

```ts
contextName?: string;
```
