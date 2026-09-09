---
url: /api/di/types/common/domain/function-provider-builder.md
description: api documentation of providerBuilder from @tsed/di
---

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

##

```ts
<Token extends Type>(token: Token, options?: Partial<ProviderOpts>): TsED.ClassProviderBuilder<Token>;
```

##

```ts
<Token extends unknown>(token: Token, options?: Partial<ProviderOpts>): TsED.ProviderBuilder<Token>;
```
