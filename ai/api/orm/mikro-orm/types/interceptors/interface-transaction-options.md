---
title: TransactionOptions from @tsed/mikro-orm
description: api documentation of TransactionOptions from @tsed/mikro-orm
meta:
 - name: keywords
   description: api typescript node.js documentation TransactionOptions interface
---
# TransactionOptions - @tsed/mikro-orm

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

<!-- Members -->

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
