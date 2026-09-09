---
title: InvokeOptions from @tsed/di
description: api documentation of InvokeOptions from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation InvokeOptions interface
---
# InvokeOptions - @tsed/di

## Usage

```typescript
import { InvokeOptions } from "@tsed/di";
```

> See [/packages/di/src/common/interfaces/InvokeOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/InvokeOptions.ts#L0-L0).

## Overview

```ts
interface InvokeOptions {
    deps: TokenProvider[];
    imports: TokenProvider[];
    parent?: TokenProvider;
    rebuild?: boolean;
    useOpts?: Record<string, unknown>;
    locals?: LocalsContainer;
}
```

<!-- Description -->

## Description

Options for invoking and building a provider instance.

Controls how the injector resolves dependencies, handles imports, and constructs provider instances.
Used when manually invoking the injector to create instances with specific configuration.

<!-- Members -->

## deps

```ts
deps: TokenProvider[];
```

Define dependencies to build the provider and inject them in the constructor.

## imports

```ts
imports: TokenProvider[];
```

List of imports to be created before the provider. Imports list aren't injected directly in the provider constructor.

## parent

```ts
parent?: TokenProvider;
```

Parent provider.

## rebuild

```ts
rebuild?: boolean;
```

If true, the injector will rebuild the instance.

## useOpts

```ts
useOpts?: Record<string, unknown>;
```

Option given to injectable props or parameter constructor (UseOpts).

## locals

```ts
locals?: LocalsContainer;
```
