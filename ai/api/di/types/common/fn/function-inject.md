---
title: inject from @tsed/di
description: api documentation of inject from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation inject function
---
# inject - @tsed/di

## Usage

```typescript
import { inject } from "@tsed/di";
```

> See [/packages/di/src/common/fn/inject.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/fn/inject.ts#L0-L0).

## Overview

```ts
function inject<TokenType>(token: TokenProvider<TokenType>, opts?: Partial<Pick<InvokeOptions, "useOpts" | "rebuild" | "locals">>): TokenType;
```

-   **token** (`TokenProvider<TokenType>`): The provider token to resolve

-   **opts** (`Partial<Pick<InvokeOptions`): Optional. invocation options (locals, rebuild, useOpts)

<!-- Description -->

## Description

Programmatically inject a provider instance.

Resolves and returns a provider instance using the global injector.
Useful for injecting dependencies outside of decorators or in property initializers.

### Usage

```typescript
import {inject, Injectable} from "@tsed/di";

@Injectable()
export class MyService {
  // Property injection
  connection = inject(CONNECTION);

  // Function injection
  getData() {
    const api = inject(ApiService);
    return api.fetch();
  }
}
```
