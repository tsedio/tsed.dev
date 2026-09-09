---
url: /api/core/types/types/class-store.md
description: api documentation of Store from @tsed/core
---

## Usage

```typescript
import { Store } from "@tsed/core";
```

> See [/packages/core/src/types/Store.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/types/Store.ts#L0-L0).

## Overview

```ts
class Store {
    
    static from(...args: any[]): Store;
    static fromMethod(target: Object, propertyKey: string | symbol): Store;
    static mergeStoreFrom(target: Type<any>, source: Type<any>, ...args: any[]): Store;
    static mergeStoreMethodFrom(target: Type<any>, source: Type<any>, propertyKey: string | symbol): Store;
    get<T = any>(key: any, defaultValue?: any): T;
    has(key: any): boolean;
    set(key: any, metadata: any): Store;
    delete(key: string): boolean;
    merge(key: any, value: any, inverse?: boolean): Store;
    toJson(): {};
}
```

## Description

Lightweight key/value registry used to attach and retrieve metadata at
class, method, property, and parameter levels.

The `Store` is used internally by decorators and utilities to group
metadata by symbol. Only the exported class is documented per the
symbols-only rule; members are intentionally not described here.

## static from

```ts
static from(...args: any[]): Store;
```

Create or get a Store from given args (target, property, descriptor).

## static fromMethod

```ts
static fromMethod(target: Object, propertyKey: string | symbol): Store;
```

Create store on the method.

## static mergeStoreFrom

```ts
static mergeStoreFrom(target: Type<any>, source: Type<any>, ...args: any[]): Store;
```

## static mergeStoreMethodFrom

```ts
static mergeStoreMethodFrom(target: Type<any>, source: Type<any>, propertyKey: string | symbol): Store;
```

## get

```ts
get<T = any>(key: any, defaultValue?: any): T;
```

* **key** (`any`): Required. The key of the element to return from the Map object.

The get() method returns a specified element from a Map object.

## has

```ts
has(key: any): boolean;
```

The has() method returns a boolean indicating whether an element with the specified key exists or not.

## set

```ts
set(key: any, metadata: any): Store;
```

* **key** (`any`): Required. The key of the element to add to the Map object.

* **metadata** (`any`): Required. The value of the element to add to the Map object.

The set() method adds or updates an element with a specified key and value to a Map object.

## delete

```ts
delete(key: string): boolean;
```

* **key** (`string`): Required. The key of the element to remove from the Map object.

The delete() method removes the specified element from a Map object.

## merge

```ts
merge(key: any, value: any, inverse?: boolean): Store;
```

* **inverse** (`boolean`): Optional. Change the merge order. Get the existing value and apply over given value

Merge given value with existing value.

## toJson

```ts
toJson(): {};
```
