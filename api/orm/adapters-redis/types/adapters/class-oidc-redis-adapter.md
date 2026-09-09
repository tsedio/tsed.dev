---
url: /api/orm/adapters-redis/types/adapters/class-oidc-redis-adapter.md
description: api documentation of OIDCRedisAdapter from @tsed/adapters-redis
---

## Usage

```typescript
import { OIDCRedisAdapter } from "@tsed/adapters-redis";
```

> See [/packages/orm/adapters-redis/src/adapters/OIDCRedisAdapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters-redis/src/adapters/OIDCRedisAdapter.ts#L0-L0).

## Overview

```ts
class OIDCRedisAdapter<T extends AdapterModel> extends RedisAdapter<T> {
    protected isGrantable: boolean;
    protected grantKeyFor(id: string): string;
    protected userCodeKeyFor(userCode: string): string;
    protected uidKeyFor(uid: string): string;
    constructor(options: RedisAdapterConstructorOptions);
    onInsert(multi: ChainableCommander, payload: T, expiresIn: number): Promise<any>;
    findByUid(uid: string): Promise<any>;
    findByUserCode(userCode: string): Promise<any>;
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
onInsert(multi: ChainableCommander, payload: T, expiresIn: number): Promise<any>;
```

## findByUid

```ts
findByUid(uid: string): Promise<any>;
```

## findByUserCode

```ts
findByUserCode(userCode: string): Promise<any>;
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
