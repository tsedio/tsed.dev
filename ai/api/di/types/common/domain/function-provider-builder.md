---
title: providerBuilder from @tsed/di
description: api documentation of providerBuilder from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation providerBuilder function
---
# providerBuilder - @tsed/di

## Usage

```typescript
import { providerBuilder } from "@tsed/di";
```

> See [/packages/di/src/common/domain/ProviderBuilder.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/domain/ProviderBuilder.ts#L0-L0).

## Overview

```ts
function providerBuilder(baseOpts?: Partial<ProviderOpts>): {
    <Token extends Type>(token: Token, options?: Partial<ProviderOpts>): TsED.ClassProviderBuilder<Token>;
    <Token extends unknown>(token: Token, options?: Partial<ProviderOpts>): TsED.ProviderBuilder<Token>;
};
```

<!-- Members -->

##

```ts
<Token extends Type>(token: Token, options?: Partial<ProviderOpts>): TsED.ClassProviderBuilder<Token>;
```

##

```ts
<Token extends unknown>(token: Token, options?: Partial<ProviderOpts>): TsED.ProviderBuilder<Token>;
```
