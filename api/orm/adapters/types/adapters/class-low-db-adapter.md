---
url: /api/orm/adapters/types/adapters/class-low-db-adapter.md
description: api documentation of LowDbAdapter from @tsed/adapters
---

## Usage

```typescript
import { LowDbAdapter } from "@tsed/adapters";
```

> See [/packages/orm/adapters/src/adapters/LowDbAdapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters/src/adapters/LowDbAdapter.ts#L0-L0).

## Overview

```ts
class LowDbAdapter<T extends AdapterModel> extends Adapter<T> {
    protected db: LowSync<LowModel<T>> | Low<LowModel<T>>;
    get collection(): T[];
    protected get dbFilePath(): string;
    create(payload: Partial<T>, expiresAt?: Date): Promise<T>;
    upsert(id: string, payload: T, expiresAt?: Date): Promise<T>;
    update(id: string, payload: T, expiresAt?: Date): Promise<T | undefined>;
    updateOne(predicate: Partial<T & any>, payload: T, expiresAt?: Date): Promise<T | undefined>;
    findOne(predicate: Partial<T & any>): Promise<T | undefined>;
    findById(_id: string): Promise<T | undefined>;
    findAll(predicate?: Partial<T & any>): Promise<T[]>;
    deleteOne(predicate: Partial<T & any>): Promise<T | undefined>;
    deleteById(_id: string): Promise<T | undefined>;
    deleteMany(predicate: Partial<T>): Promise<T[]>;
}
```

## protected db

```ts
protected db: LowSync<LowModel<T>> | Low<LowModel<T>>;
```

## get collection

```ts
get collection(): T[];
```

## protected get dbFilePath

```ts
protected get dbFilePath(): string;
```

## create

```ts
create(payload: Partial<T>, expiresAt?: Date): Promise<T>;
```

## upsert

```ts
upsert(id: string, payload: T, expiresAt?: Date): Promise<T>;
```

## update

```ts
update(id: string, payload: T, expiresAt?: Date): Promise<T | undefined>;
```

## updateOne

```ts
updateOne(predicate: Partial<T & any>, payload: T, expiresAt?: Date): Promise<T | undefined>;
```

## findOne

```ts
findOne(predicate: Partial<T & any>): Promise<T | undefined>;
```

## findById

```ts
findById(_id: string): Promise<T | undefined>;
```

## findAll

```ts
findAll(predicate?: Partial<T & any>): Promise<T[]>;
```

## deleteOne

```ts
deleteOne(predicate: Partial<T & any>): Promise<T | undefined>;
```

## deleteById

```ts
deleteById(_id: string): Promise<T | undefined>;
```

## deleteMany

```ts
deleteMany(predicate: Partial<T>): Promise<T[]>;
```
