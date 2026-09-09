---
url: /api/orm/adapters-ioredis/types/adapters/class-oidcio-redis-adapter.md
description: api documentation of OIDCIORedisAdapter from @tsed/adapters-ioredis
---

## Usage

```typescript
import { OIDCIORedisAdapter } from "@tsed/adapters-ioredis";
```

> See [/packages/orm/adapters-ioredis/src/adapters/OIDCIORedisAdapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters-ioredis/src/adapters/OIDCIORedisAdapter.ts#L0-L0).

## Overview

```ts
class OIDCIORedisAdapter<T extends AdapterModel> extends OIRedisAdapter<T> {
    protected isGrantable: boolean;
    protected grantKeyFor(id: string): string;
    protected userCodeKeyFor(userCode: string): string;
    protected uidKeyFor(uid: string): string;
    constructor(options: OIRedisAdapterConstructorOptions);
    onInsert(multi: ChainableCommander, payload: T, expiresIn: number): Promise<ChainableCommander>;
    findByUid(uid: string): Promise<"" | T | null | undefined>;
    findByUserCode(userCode: string): Promise<"" | T | null | undefined>;
    destroy(id: string): Promise<void>;
    revokeByGrantId(grantId: string): Promise<void>;
    consume(id: string): Promise<void>;
}
```

## protected isGrantable

```ts
protected isGrantable: boolean;
```

## protected grantKeyFor

```ts
protected grantKeyFor(id: string): string;
```

## protected userCodeKeyFor

```ts
protected userCodeKeyFor(userCode: string): string;
```

## protected uidKeyFor

```ts
protected uidKeyFor(uid: string): string;
```

## onInsert

```ts
onInsert(multi: ChainableCommander, payload: T, expiresIn: number): Promise<ChainableCommander>;
```

## findByUid

```ts
findByUid(uid: string): Promise<"" | T | null | undefined>;
```

## findByUserCode

```ts
findByUserCode(userCode: string): Promise<"" | T | null | undefined>;
```

## destroy

```ts
destroy(id: string): Promise<void>;
```

## revokeByGrantId

```ts
revokeByGrantId(grantId: string): Promise<void>;
```

## consume

```ts
consume(id: string): Promise<void>;
```
