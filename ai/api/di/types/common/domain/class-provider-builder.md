---
title: ProviderBuilder from @tsed/di
description: api documentation of ProviderBuilder from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation ProviderBuilder class
---
# ProviderBuilder - @tsed/di

## Usage

```typescript
import { ProviderBuilder } from "@tsed/di";
```

> See [/packages/di/src/common/domain/ProviderBuilder.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/domain/ProviderBuilder.ts#L0-L0).

## Overview

```ts
class ProviderBuilder<Token> {
    protected provider: Provider<Token>;
    constructor(options: ProviderOpts<Token>);
    static add<Keys extends keyof ClassProviderBuilder, Token extends Type>(property: Keys, method: (this: ClassProviderBuilder<Token>, ...args: Parameters<ClassProviderBuilder<Token>[Keys]>) => ReturnType<ClassProviderBuilder<Token>[Keys]>): typeof ProviderBuilder;
    scope(scope: Provider["scope"]): ProviderBuilder<Token>;
    path(path: Provider["path"]): ProviderBuilder<Token>;
    alias(alias: Provider["alias"]): ProviderBuilder<Token>;
    hooks(hooks: Provider["hooks"]): ProviderBuilder<Token>;
    deps(deps: Provider["deps"]): ProviderBuilder<Token>;
    imports(imports: Provider["imports"]): ProviderBuilder<Token>;
    configuration(configuration: Provider["configuration"]): ProviderBuilder<Token>;
    priority(priority: Provider["priority"]): ProviderBuilder<Token>;
    type(type: Provider["type"]): ProviderBuilder<Token>;
    children(children: Provider["children"]): ProviderBuilder<Token>;
    middlewares(middlewares: Provider["middlewares"]): ProviderBuilder<Token>;
    factory<FactoryReturn>(factory: (...args: unknown[]) => FactoryReturn): ProviderBuilder<FactoryTokenProvider<FactoryReturn>>;
    asyncFactory<FactoryReturn>(asyncFactory: (...args: unknown[]) => Promise<FactoryReturn>): ProviderBuilder<FactoryTokenProvider<FactoryReturn>>;
    value<Value>(value: Value): ProviderBuilder<FactoryTokenProvider<Value>>;
    class<TokenKlass>(k: Type<TokenKlass>): ProviderBuilder<TokenKlass>;
    store(): Store;
    inspect(): Provider<Token>;
    token(): Token;
    set(key: string, value: unknown): ProviderBuilder<Token>;
}
```

<!-- Description -->

## Description

Sets a value in the provider's store

<!-- Members -->

## Constructor

```ts
constructor(options: ProviderOpts<Token>);
```

Creates a new Provider Builder instance

## protected provider

```ts
protected provider: Provider<Token>;
```

## static add

```ts
static add<Keys extends keyof ClassProviderBuilder, Token extends Type>(property: Keys, method: (this: ClassProviderBuilder<Token>, ...args: Parameters<ClassProviderBuilder<Token>[Keys]>) => ReturnType<ClassProviderBuilder<Token>[Keys]>): typeof ProviderBuilder;
```

## scope

```ts
scope(scope: Provider["scope"]): ProviderBuilder<Token>;
```

-   **scope** (`Provider["scope"]`): - The scope to set for this provider

Sets the provider scope

## path

```ts
path(path: Provider["path"]): ProviderBuilder<Token>;
```

-   **path** (`Provider["path"]`): - The path to set for this provider

Sets the provider path

## alias

```ts
alias(alias: Provider["alias"]): ProviderBuilder<Token>;
```

-   **alias** (`Provider["alias"]`): - The alias to set for this provider

Sets the provider alias

## hooks

```ts
hooks(hooks: Provider["hooks"]): ProviderBuilder<Token>;
```

-   **hooks** (`Provider["hooks"]`): - The hooks to set for this provider

Sets the provider hooks

## deps

```ts
deps(deps: Provider["deps"]): ProviderBuilder<Token>;
```

-   **deps** (`Provider["deps"]`): - The dependencies to set for this provider

Sets the provider dependencies

## imports

```ts
imports(imports: Provider["imports"]): ProviderBuilder<Token>;
```

-   **imports** (`Provider["imports"]`): - The imports to set for this provider

Sets the provider imports

## configuration

```ts
configuration(configuration: Provider["configuration"]): ProviderBuilder<Token>;
```

-   **configuration** (`Provider["configuration"]`): - The configuration to set for this provider

Sets the provider configuration

## priority

```ts
priority(priority: Provider["priority"]): ProviderBuilder<Token>;
```

-   **priority** (`Provider["priority"]`): - The priority to set for this provider

Sets the provider priority

## type

```ts
type(type: Provider["type"]): ProviderBuilder<Token>;
```

-   **type** (`Provider["type"]`): - The type to set for this provider

Sets the provider type

## children

```ts
children(children: Provider["children"]): ProviderBuilder<Token>;
```

-   **children** (`Provider["children"]`): - The children to set for this provider

Sets the provider children

## middlewares

```ts
middlewares(middlewares: Provider["middlewares"]): ProviderBuilder<Token>;
```

-   **middlewares** (`Provider["middlewares"]`): - The middlewares to set for this provider

Sets the provider middlewares

## factory

```ts
factory<FactoryReturn>(factory: (...args: unknown[]) => FactoryReturn): ProviderBuilder<FactoryTokenProvider<FactoryReturn>>;
```

-   **factory** (`(...args: unknown[]) => FactoryReturn`): - Factory function that creates provider instances

Sets a factory function for the provider

## asyncFactory

```ts
asyncFactory<FactoryReturn>(asyncFactory: (...args: unknown[]) => Promise<FactoryReturn>): ProviderBuilder<FactoryTokenProvider<FactoryReturn>>;
```

-   **asyncFactory** (`(...args: unknown[]) => Promise<FactoryReturn>`): - Async factory function that creates provider instances

Sets an async factory function for the provider

## value

```ts
value<Value>(value: Value): ProviderBuilder<FactoryTokenProvider<Value>>;
```

-   **value** (`Value`): - Value to be provided

Sets a static value for the provider

## class

```ts
class<TokenKlass>(k: Type<TokenKlass>): ProviderBuilder<TokenKlass>;
```

-   **k** (`Type<TokenKlass>`): - Class type to be provided

Sets the class to be used by the provider

## store

```ts
store(): Store;
```

Gets the provider's store

## inspect

```ts
inspect(): Provider<Token>;
```

Gets the underlying provider instance

## token

```ts
token(): Token;
```

Gets the provider's token

## set

```ts
set(key: string, value: unknown): ProviderBuilder<Token>;
```

-   **key** (`string`): - Key to store the value under

-   **value** (`unknown`): - Value to store

Sets a value in the provider's store
