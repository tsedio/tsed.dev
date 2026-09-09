---
title: ResolvedInvokeOptions from @tsed/di
description: api documentation of ResolvedInvokeOptions from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation ResolvedInvokeOptions interface
---
# ResolvedInvokeOptions - @tsed/di

## Usage

```typescript
import { ResolvedInvokeOptions } from "@tsed/di";
```

> See [/packages/di/src/common/interfaces/ResolvedInvokeOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/ResolvedInvokeOptions.ts#L0-L0).

## Overview

```ts
interface ResolvedInvokeOptions {
    token: TokenProvider;
    parent?: TokenProvider;
    deps: TokenProvider[];
    imports: (TokenProvider | [TokenProvider])[];
    provider: Provider;
    locals: LocalsContainer;
    construct(deps: TokenProvider[]): any;
}
```

<!-- Description -->

## Description

Resolved invocation options used internally by the injector.

Contains fully resolved dependencies, provider metadata, and construction logic
prepared by the injector before instantiating a provider.

<!-- Members -->

## token

```ts
token: TokenProvider;
```

## parent

```ts
parent?: TokenProvider;
```

## deps

```ts
deps: TokenProvider[];
```

## imports:

```ts
imports: (TokenProvider | [TokenProvider])[];
```

## provider

```ts
provider: Provider;
```

## locals

```ts
locals: LocalsContainer;
```

## construct

```ts
construct(deps: TokenProvider[]): any;
```
