---
title: Container from @tsed/di
description: api documentation of Container from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation Container class
---
# Container - @tsed/di

## Usage

```typescript
import { Container } from "@tsed/di";
```

> See [/packages/di/src/common/domain/Container.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/domain/Container.ts#L0-L0).

## Overview

```ts
class Container extends Map<TokenProvider, Provider> {
    add(token: TokenProvider, settings?: Partial<ProviderOpts>): this;
    get<T extends Provider = Provider>(token: TokenProvider | undefined): T | undefined;
    getMany(type?: TokenProvider | ProviderType | string | string[]): Provider[];
    merge(container: Map<TokenProvider, Provider>): void;
}
```

<!-- Description -->

## Description

Provider container managing registered providers and their metadata.

Extends `Map` to provide specialized methods for adding, retrieving, and managing providers
within the dependency injection system. Acts as a registry for all injectable classes and values.

### Usage

```typescript
import {Container} from "@tsed/di";

const container = new Container();
container.add(MyService, {scope: ProviderScope.SINGLETON});

const provider = container.get(MyService);
const controllers = container.getMany(ProviderType.CONTROLLER);
```

<!-- Members -->

## add

```ts
add(token: TokenProvider, settings?: Partial<ProviderOpts>): this;
```

Add a provider to the

## get

```ts
get<T extends Provider = Provider>(token: TokenProvider | undefined): T | undefined;
```

## getMany

```ts
getMany(type?: TokenProvider | ProviderType | string | string[]): Provider[];
```

-   **type** (`TokenProvider` | `ProviderType` | `string` | `string[]`): Optional. Filter the list by the given ProviderType.

Get all providers registered in the injector container.

## merge

```ts
merge(container: Map<TokenProvider, Provider>): void;
```
